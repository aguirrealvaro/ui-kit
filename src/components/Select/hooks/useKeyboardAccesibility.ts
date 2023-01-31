import { useState, useEffect, RefObject, KeyboardEvent, MutableRefObject } from "react";
import { SelectFieldType } from "../Select.types";
import { useDebounce, useIsFirstRender } from "@/hooks";

type UseKeyboardAccesibilityParams = {
  isOpen: boolean;
  setIsOpen: (flag: boolean) => void;
  options: SelectFieldType[];
  value: string | undefined;
  clearValue: (() => void) | undefined;
  selectRef: RefObject<HTMLDivElement>;
  optionsRef: MutableRefObject<HTMLButtonElement[]>;
};

type UseKeyboardAccesibilityReturn = {
  focusedIndex: number | undefined;
  handleKeyDown: (event: KeyboardEvent) => void;
};

export const useKeyboardAccesibility = ({
  isOpen,
  setIsOpen,
  options,
  value,
  clearValue,
  selectRef,
  optionsRef,
}: UseKeyboardAccesibilityParams): UseKeyboardAccesibilityReturn => {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [search, setSearch] = useState<string | undefined>(undefined);

  const selectedIndex = options.findIndex((option) => option.value === value);

  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    // i need to do this after the first render
    if (!isOpen && !isFirstRender) {
      // after closing dropdown, keep focusing select
      selectRef.current?.focus();

      // set focus on the selected index
      setFocusedIndex(selectedIndex);
    }
  }, [isFirstRender, isOpen, selectRef, selectedIndex]);

  const enabledIndexs = options
    .map(({ disabled }, index) => {
      if (!disabled) return index;
    })
    .filter((option) => option !== undefined);

  const firstOption = enabledIndexs[0];
  const lastOption = enabledIndexs[enabledIndexs.length - 1];

  const nextOption =
    enabledIndexs[enabledIndexs.findIndex((option) => option === focusedIndex) + 1];

  const previousOption =
    enabledIndexs[enabledIndexs.findIndex((option) => option === focusedIndex) - 1];

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab" && isOpen) {
      setIsOpen(false);
    }

    if (event.key === "Escape") {
      if (isOpen) {
        setIsOpen(false);
      } else {
        if (value && clearValue) clearValue();
      }
    }

    if (event.key === "Enter") {
      if (!isOpen) {
        setIsOpen(true);
      } else {
        if (focusedIndex === -1) {
          setIsOpen(false);
        }
        // if focusedIndex has a value, and we select it, it will close (L66 Select.tsx)
      }
    }

    if (event.key === " ") {
      setIsOpen(!isOpen);
    }

    if (event.key === "ArrowDown") {
      if (!isOpen) {
        setIsOpen(true);
      } else {
        if (nextOption !== undefined) {
          event.preventDefault();
          optionsRef.current[nextOption].focus();
          setFocusedIndex(nextOption);
        }
      }
    }

    if (event.key === "ArrowUp") {
      if (!isOpen) {
        setIsOpen(true);
      } else {
        if (previousOption !== undefined) {
          event.preventDefault();
          optionsRef.current[previousOption].focus();
          setFocusedIndex(previousOption);
        }
      }
    }

    if (event.key === "Home") {
      if (!isOpen) setIsOpen(true);
      if (firstOption !== undefined) {
        optionsRef.current[firstOption].focus();
        setFocusedIndex(firstOption);
      }
    }

    if (event.key === "End") {
      if (!isOpen) setIsOpen(true);
      if (lastOption !== undefined) {
        optionsRef.current[lastOption].focus();
        setFocusedIndex(lastOption);
      }
    }

    const isLetter = /^[a-z]$/i.test(event.key);
    const isNumber = /^[0-9]$/i.test(event.key);

    if ((isLetter || isNumber) && isOpen) {
      event.preventDefault();
      setSearch((prevSearch) => {
        if (prevSearch) {
          return `${prevSearch}${event.key}`;
        } else {
          return event.key;
        }
      });
    }
  };

  const resetSearchDebounced = useDebounce(() => {
    setSearch(undefined);
  }, 1000);

  useEffect(() => {
    if (search) {
      resetSearchDebounced();
    }
  }, [resetSearchDebounced, search]);

  const searchIndex = search
    ? options.findIndex(({ searchPattern }) => {
        return searchPattern?.includes(search);
      })
    : -1;

  useEffect(() => {
    if (searchIndex !== -1) {
      optionsRef.current[searchIndex]?.focus();
      setFocusedIndex(searchIndex);
    }
  }, [optionsRef, searchIndex]);

  return { focusedIndex, handleKeyDown };
};
