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
import { SelectFieldType, SelectSizeType } from "./Select.types";
import { Spinner, Icon } from "@/components";
import { useOutsideClick, useTheme } from "@/hooks";

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
  size?: SelectSizeType;
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
  size = "md",
}) => {
  const { theme } = useTheme();

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

  const showBottom: boolean = !!helpText || !!error;

  return (
    <Container ref={containerRef}>
      {label && <Label size={size}>{label}</Label>}
      <SelectContainer
        disabled={disabled || false}
        isSelected={isSelected}
        error={!!error}
        isOpen={isOpen}
        size={size}
        onClick={handleDropdown}
      >
        <InnerContainer size={size}>
          <span>{selectedValue || placeholder}</span>
        </InnerContainer>
        <SideContainer>
          {isLoading && <Spinner size="xs" />}
          {isSelected && clearValue && (
            <ButtonClear onClick={handleClearValue}>
              <Icon icon={CloseOutline} color={theme.colors.grey.base} size={18} />
            </ButtonClear>
          )}
          <ChevronWrapper active={isOpen}>
            <Icon icon={ChevronDown} color={theme.colors.grey.base} size={23} />
          </ChevronWrapper>
        </SideContainer>
      </SelectContainer>
      {isOpen && (
        <Dropdown size={size}>
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
      {showBottom && (
        <BottomText error={!!error} size={size}>
          {error || helpText}
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
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: ${({ size }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: "14px",
      md: "16px",
      lg: "18px",
    };
    return sizes[size];
  }};
`;

const SelectContainer = styled.div<{
  isSelected: boolean;
  error: boolean;
  disabled: boolean;
  isOpen: boolean;
  size: SelectSizeType;
}>`
  display: flex;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.grey[13] : theme.colors.grey.base};
  height: ${({ size }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: "32px",
      md: "40px",
      lg: "48px",
    };
    return sizes[size];
  }};
  cursor: pointer;
  border: 1px solid
    ${({ theme, error, isOpen }) => {
      if (isOpen) {
        return theme.colors.blue.base;
      }

      if (error) {
        return theme.colors.red.base;
      }

      return theme.colors.grey[6];
    }};
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        background: ${theme.colors.grey[5]};
        border: 1px solid transparent;
        cursor: not-allowed;
      `;
    }
  }};
`;

const InnerContainer = styled.div<{ size: SelectSizeType }>`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  font-size: ${({ size }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: "14px",
      md: "16px",
      lg: "18px",
    };
    return sizes[size];
  }};
`;

const SideContainer = styled.div`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Dropdown = styled.div<{ size: SelectSizeType }>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[5]};
  background-color: ${({ theme }) => theme.colors.grey[4]};
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  width: 100%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  transform: translateY(5px);
  font-size: ${({ size }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: "14px",
      md: "16px",
      lg: "18px",
    };
    return sizes[size];
  }};
`;

const Option = styled.button<{ isSelected: boolean }>`
  padding: 8px 12px;
  margin-bottom: 4px;
  text-align: left;
  color: ${({ theme }) => theme.colors.grey[13]};
  &:last-child {
    margin-bottom: 0;
  }
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.colors.blue.base};
          color: ${theme.colors.grey[1]};
        `
      : css`
          &:hover {
            background-color: ${theme.colors.blue.base};
            color: ${({ theme }) => theme.colors.grey[1]};
          }
        `};
  &:disabled {
    background: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BottomText = styled.div<{ error: boolean; size: SelectSizeType }>`
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) => theme.colors[error ? "red" : "grey"].base};
  font-size: ${({ size }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: "12px",
      md: "14px",
      lg: "16px",
    };
    return sizes[size];
  }};
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
