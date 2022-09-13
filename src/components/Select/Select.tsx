import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from "react";
import styled, { css } from "styled-components";
import { LabelValue } from "./types";
import { Icon, Spinner } from "@/components";
import { theme } from "@/components/App";
import { useOnClickOutside } from "@/hooks";

const ANIMATION_TIME = 200;

type SelectProps = {
  placeholder: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  options: LabelValue[];
  disabled?: boolean;
  helpText?: string;
  error?: string;
  isLoading?: boolean;
  clearValue?: () => void;
};

export const Select: FunctionComponent<SelectProps> = ({
  placeholder,
  value,
  onChange,
  options,
  disabled,
  helpText,
  error,
  isLoading,
  clearValue,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  useOnClickOutside({ ref: containerRef, callback: closeDropdown, prevent: !isOpen });

  useEffect(() => {
    if (value) closeDropdown();
  }, [value, closeDropdown]);

  const selectedValue = options.find((option) => option.value === value)?.label;

  const handleDropdown = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const isSelected = !!value;

  const handleClearValue = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    clearValue?.();
  };

  return (
    <Container ref={containerRef}>
      <SelectContainer
        disabled={disabled || false}
        isSelected={isSelected}
        error={!!error}
        isOpen={isOpen}
        onClick={handleDropdown}
      >
        <InnerContainer>
          <Placeholder shouldAnimate={isSelected ? true : isOpen} isOpen={isOpen}>
            {placeholder}
          </Placeholder>
          <SelectedValue isSelected={isSelected}>{selectedValue}</SelectedValue>
        </InnerContainer>
        <SideContainer>
          {isLoading && <Spinner size="mini" />}
          {isSelected && clearValue && (
            <ButtonClear onClick={handleClearValue}>
              <Icon icon="close" size="14px" color={theme.colors.grey} />
            </ButtonClear>
          )}
          <Chevron active={isOpen} icon="chevron_down" size="14px" color={theme.colors.grey} />
        </SideContainer>
      </SelectContainer>
      {isOpen && (
        <Dropdown>
          {options.map((option, i) => {
            const onClick = () => onChange(option.value);
            const isSelected = value === option.value;
            return (
              <Option
                key={i}
                onClick={onClick}
                disabled={option.disabled}
                isSelected={isSelected}
              >
                {option.label}
              </Option>
            );
          })}
        </Dropdown>
      )}
      {(helpText || error) && <BottomText error={!!error}>{error || helpText}</BottomText>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const SelectContainer = styled.div<{
  isSelected: boolean;
  error: boolean;
  disabled: boolean;
  isOpen: boolean;
}>`
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  color: ${({ theme, isSelected }) => theme.colors[isSelected ? "black" : "grey"]};
  width: 100%;
  height: 55px;
  border: 1px solid
    ${({ theme, error, isOpen }) => {
      if (isOpen) {
        return theme.colors.blue;
      }

      if (error) {
        return theme.colors.red;
      }

      return "rgba(0, 0, 0, 0.36)";
    }};
  ${({ disabled }) => {
    if (disabled) {
      return css`
        background: #f3f3f3;
        border: 1px solid transparent;
        cursor: not-allowed;
      `;
    }
  }};
`;

const InnerContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  position: relative;
  cursor: pointer;
`;

const SideContainer = styled.div`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Placeholder = styled.span<{ shouldAnimate: boolean; isOpen: boolean }>`
  display: inline-block;
  color: ${({ theme, isOpen }) => theme.colors[isOpen ? "blue" : "grey"]};
  position: absolute;
  transition: font-size ${ANIMATION_TIME}ms ease, top ${ANIMATION_TIME}ms ease,
    transform ${ANIMATION_TIME}ms ease;
  ${({ shouldAnimate }) => {
    if (shouldAnimate) {
      return css`
        top: 7px;
        font-size: 0.75rem;
      `;
    } else {
      return css`
        top: 50%;
        transform: translateY(-50%);
      `;
    }
  }}
`;

const SelectedValue = styled.span<{ isSelected: boolean }>`
  position: absolute;
  height: ${({ isSelected }) => (isSelected ? "72%" : "100%")};
  bottom: 0;
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 1;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background: #fff;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  border-radius: 8px;
  width: 100%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transform: translateY(5px);
`;

const Option = styled.button<{ isSelected: boolean }>`
  padding: 8px 12px;
  margin-bottom: 4px;
  text-align: left;
  &:last-child {
    margin-bottom: 0;
  }
  border-radius: 8px;
  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
        `
      : css`
          &:hover {
            background-color: #e7e7e7;
          }
        `};

  &:disabled {
    background: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BottomText = styled.div<{ error: boolean }>`
  font-size: 13px;
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) => theme.colors[error ? "red" : "grey"]};
`;

const Chevron = styled(Icon)<{ active: boolean }>`
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${ANIMATION_TIME}ms ease;
`;

const ButtonClear = styled.button`
  line-height: 0;
`;
