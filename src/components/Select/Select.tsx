import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
  MouseEvent,
  ReactNode,
  KeyboardEvent,
} from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { ChevronDown } from "@styled-icons/fluentui-system-filled/ChevronDown";
import styled, { css } from "styled-components";
import { SelectFieldType, SelectSizeType } from "./Select.types";
import { Spinner, Icon, IconButton } from "@/components";
import { useIsFirstRender, useOutsideClick } from "@/hooks";

type SelectProps = {
  selectId: string;
  labelId: string;
  label?: ReactNode;
  placeholder: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string>>;
  options: SelectFieldType[];
  disabled?: boolean;
  helpText?: ReactNode;
  isError?: boolean;
  errorMessage?: ReactNode;
  isSuccess?: boolean;
  successMessage?: ReactNode;
  isLoading?: boolean;
  clearValue?: () => void;
  size?: SelectSizeType;
};

export const Select: FunctionComponent<SelectProps> = ({
  selectId,
  labelId,
  label,
  placeholder,
  value,
  onChange,
  options,
  disabled,
  helpText,
  isError = false,
  errorMessage,
  isSuccess = false,
  successMessage,
  isLoading,
  clearValue,
  size = "md",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLButtonElement[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  useOutsideClick({ ref: selectRef, handler: closeDropdown, enabled: isOpen });

  useEffect(() => {
    if (value) closeDropdown();
  }, [value, closeDropdown]);

  const selectedLabel = options.find((option) => option.value === value)?.label;

  const handleDropdown = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const isSelected = !!value;

  const handleClearValue = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    clearValue?.();
  };

  const showBottom: boolean = !!helpText || !!errorMessage || !!successMessage;

  const [focusedIndex, setFocusedIndex] = useState<number | undefined>(undefined);

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
  }, [isFirstRender, isOpen, selectedIndex]);

  const enabledIndexs = options
    .map(({ disabled }, index) => {
      if (!disabled) return index;
    })
    .filter((option) => !!option);

  const firstOption = enabledIndexs[0];
  const lastOption = enabledIndexs[enabledIndexs.length - 1];

  const nextOption =
    enabledIndexs[enabledIndexs.findIndex((option) => option === focusedIndex) + 1];

  const previousOption =
    enabledIndexs[enabledIndexs.findIndex((option) => option === focusedIndex) - 1];

  const handleComboboxKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab" && isOpen) {
      setIsOpen(false);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      if (isOpen) {
        setIsOpen(false);
      } else {
        if (value && clearValue) clearValue();
      }
    }

    if (event.key === "Enter" || event.key === " ") {
      setIsOpen(!isOpen);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        // if none is selected
        if (selectedIndex === -1) {
          // focus first
          if (firstOption) {
            optionsRef.current[firstOption].focus();
            setFocusedIndex(firstOption);
          }
        } else {
          // focus next
          if (nextOption) {
            optionsRef.current[nextOption].focus();
            setFocusedIndex(nextOption);
          }
        }
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        // if some value is selected
        if (selectedIndex !== -1) {
          // focus previous
          if (previousOption) {
            optionsRef.current[previousOption].focus();
            setFocusedIndex(previousOption);
          }
        }
      }
    }

    if (event.key === "Home") {
      event.preventDefault();
      if (!isOpen) setIsOpen(true);
      if (firstOption) {
        optionsRef.current[firstOption].focus();
        setFocusedIndex(firstOption);
      }
    }

    if (event.key === "End") {
      event.preventDefault();
      if (!isOpen) setIsOpen(true);
      if (lastOption) {
        optionsRef.current[lastOption].focus();
        setFocusedIndex(lastOption);
      }
    }
  };

  const handleDropdownKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Tab" || event.key === "Escape") {
      setIsOpen(false);
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (nextOption) {
        optionsRef.current[nextOption].focus();
        setFocusedIndex(nextOption);
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (previousOption) {
        optionsRef.current[previousOption].focus();
        setFocusedIndex(previousOption);
      }
    }

    if (event.key === "Home") {
      event.preventDefault();
      if (firstOption) {
        optionsRef.current[firstOption].focus();
        setFocusedIndex(firstOption);
      }
    }

    if (event.key === "End") {
      event.preventDefault();
      if (lastOption) {
        optionsRef.current[lastOption].focus();
        setFocusedIndex(lastOption);
      }
    }
  };

  const getOptionId = (index: number | undefined) => {
    if (index !== undefined) {
      return `${selectId}-option-${index}`;
    }
  };

  return (
    <Container ref={containerRef}>
      {label && (
        <Label size={size} id={labelId}>
          {label}
        </Label>
      )}
      <SelectContainer
        role="combobox"
        tabIndex={0}
        disabled={disabled || false}
        isSelected={isSelected}
        isError={isError}
        isSuccess={isSuccess}
        isOpen={isOpen}
        size={size}
        onClick={handleDropdown}
        ref={selectRef}
        aria-controls={selectId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={labelId}
        aria-activedescendant={isOpen ? getOptionId(focusedIndex) : undefined}
        onKeyDown={handleComboboxKeyDown}
      >
        <InnerContainer size={size}>
          <span>{selectedLabel || placeholder}</span>
        </InnerContainer>
        <SideContainer>
          {isLoading && <Spinner size="xs" />}
          {isSelected && clearValue && (
            <IconButton size="sm" onClick={handleClearValue}>
              <Icon icon={CloseOutline} size={18} />
            </IconButton>
          )}
          <ChevronWrapper active={isOpen}>
            <Icon icon={ChevronDown} size={18} />
          </ChevronWrapper>
        </SideContainer>
      </SelectContainer>
      <Dropdown
        isOpen={isOpen}
        size={size}
        role="listbox"
        id={selectId}
        aria-labelledby={labelId}
        onKeyDown={handleDropdownKeyDown}
      >
        {options.map((option, index) => {
          const onClick = () => onChange(option.value);
          const isSelected = value === option.value;
          return (
            <Option
              role="option"
              id={getOptionId(index)}
              key={index}
              onClick={onClick}
              disabled={option.disabled}
              isSelected={isSelected}
              aria-selected={isSelected}
              tabIndex={-1}
              ref={(el) => {
                if (optionsRef.current && el) {
                  optionsRef.current[index] = el;
                }
              }}
            >
              {option.label}
            </Option>
          );
        })}
      </Dropdown>
      {showBottom && (
        <BottomText
          showErrorMessage={!!errorMessage}
          showSuccessMessage={!!successMessage}
          size={size}
        >
          {errorMessage || successMessage || helpText}
        </BottomText>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Label = styled.label<{ size: SelectSizeType }>`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.assets.textSecondary};
  font-size: ${({ size, theme }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;

const SelectContainer = styled.div<{
  isSelected: boolean;
  isError: boolean;
  isSuccess: boolean;
  disabled: boolean;
  isOpen: boolean;
  size: SelectSizeType;
}>`
  display: flex;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.assets.textPrimary : theme.assets.inputPlaceholder};
  height: ${({ size, theme }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: theme.sizes[8],
      md: theme.sizes[10],
      lg: theme.sizes[12],
    };
    return sizes[size];
  }};
  cursor: pointer;
  border: 1px solid transparent;
  border-color: ${({ theme, isError, isSuccess }) => {
    if (isError) {
      return theme.assets.danger;
    }

    if (isSuccess) {
      return theme.assets.success;
    }

    return theme.assets.border;
  }};
  outline: none;
  &:focus {
    border-color: transparent;
    box-shadow: ${({ theme, isError, isSuccess }) => {
      if (isError) {
        return theme.shadows["outline-danger"];
      }

      if (isSuccess) {
        return theme.shadows["outline-success"];
      }

      return theme.shadows["outline-primary"];
    }};
  }
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        background-color: ${theme.assets.disabledBg};
        border-color: transparent;
        cursor: not-allowed;
        color: ${({ theme }) => theme.assets.disabledText};
      `;
    }
  }};
`;

const InnerContainer = styled.div<{ size: SelectSizeType }>`
  padding: 0 ${({ theme }) => theme.sizes[4]};
  display: flex;
  align-items: center;
  font-size: ${({ size, theme }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;

const SideContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing[6]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Dropdown = styled.div<{ size: SelectSizeType; isOpen: boolean }>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  padding: ${({ theme }) => theme.sizes[2]};
  border: 1px solid ${({ theme }) => theme.assets.border};
  background-color: ${({ theme }) => theme.assets.bgPrimary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  width: 100%;
  max-height: 250px;
  // TO DO: do this with max height
  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
      `;
    } else {
      return css`
        opacity: 0;
        pointer-events: none;
      `;
    }
  }}
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  overflow-y: auto;
  transform: translateY(5px);
  font-size: ${({ size, theme }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;

const Option = styled.button<{ isSelected: boolean }>`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  text-align: left;
  color: ${({ theme }) => theme.assets.textPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.assets.primary};
          color: ${theme.colors.white};
        `
      : css`
          &:hover:not([disabled]) {
            background-color: ${theme.assets.hover};
          }
        `};
  &:disabled {
    background-color: none;
    color: ${({ theme }) => theme.assets.disabledBg};
    cursor: not-allowed;
  }
`;

const BottomText = styled.div<{
  showErrorMessage: boolean;
  size: SelectSizeType;
  showSuccessMessage: boolean;
}>`
  margin: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]} 0
    ${({ theme }) => theme.spacing[4]};
  color: ${({ showErrorMessage, theme, showSuccessMessage }) => {
    if (showErrorMessage) {
      return theme.assets.danger;
    }

    if (showSuccessMessage) {
      return theme.assets.success;
    }
    return theme.assets.textSecondary;
  }};
  font-size: ${({ size, theme }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[size];
  }};
`;

const ChevronWrapper = styled.div<{ active: boolean }>`
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.in};
  display: flex;
  align-items: center;
`;
