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
} from "react";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import styled, { css } from "styled-components";
import { SelectFieldType } from "./Select.types";
import { Spinner, Icon } from "@/components";
import { theme } from "@/components/App";
import { useOutsideClick } from "@/hooks";

const ANIMATION_TIME = 200;

type SelectProps = {
  label?: ReactNode;
  placeholder: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  options: SelectFieldType[];
  disabled?: boolean;
  helpText?: string;
  error?: string;
  isLoading?: boolean;
  clearValue?: () => void;
};

export const Select: FunctionComponent<SelectProps> = ({
  label,
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

  useOutsideClick({ ref: containerRef, handler: closeDropdown, enabled: isOpen });

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
      <Label>{label}</Label>
      <SelectContainer
        disabled={disabled || false}
        isSelected={isSelected}
        error={!!error}
        isOpen={isOpen}
        onClick={handleDropdown}
      >
        <InnerContainer>
          <span>{selectedValue || placeholder}</span>
        </InnerContainer>
        <SideContainer>
          {isLoading && <Spinner size="xs" />}
          {isSelected && clearValue && (
            <ButtonClear onClick={handleClearValue}>
              <Icon icon={CloseOutline} color={theme.colors.grey} size={18} />
            </ButtonClear>
          )}
          <ChevronWrapper active={isOpen}>
            <Icon icon={ChevronDown} color={theme.colors.grey} size={23} />
          </ChevronWrapper>
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

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 14px;
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
  height: 55px;
  cursor: pointer;
  border: 1px solid
    ${({ theme, error, isOpen }) => {
      if (isOpen) {
        return theme.colors.blue;
      }

      if (error) {
        return theme.colors.red;
      }

      return "rgba(0, 0, 0, 0.2)";
    }};
  ${({ disabled }) => {
    if (disabled) {
      return css`
        background: #e9e9e9;
        border: 1px solid transparent;
        cursor: not-allowed;
      `;
    }
  }};
`;

const InnerContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;

const SideContainer = styled.div`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Dropdown = styled.div`
  position: absolute;
  z-index: 1;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  background: #fff;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  border-radius: 4px;
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
  border-radius: 4px;
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

const ChevronWrapper = styled.div<{ active: boolean }>`
  transform: ${({ active }) => `rotate(${active ? "-180" : 0}deg)`};
  transition: transform ${ANIMATION_TIME}ms ease;
  display: flex;
  align-items: center;
`;

const ButtonClear = styled.button`
  line-height: 0;
`;
