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

type SelectProps = {
  label?: ReactNode;
  placeholder: string;
  value: string | undefined;
  onChange: Dispatch<SetStateAction<string | undefined>>;
  options: SelectFieldType[];
  disabled?: boolean;
  helpText?: string;
  isError?: boolean;
  errorMessage?: string;
  isSuccess?: boolean;
  successMessage?: string;
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
  isError,
  errorMessage,
  isSuccess,
  successMessage,
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

  const showBottom: boolean = !!helpText || !!errorMessage || !!successMessage;

  return (
    <Container ref={containerRef}>
      {label && <Label size={size}>{label}</Label>}
      <SelectContainer
        disabled={disabled || false}
        isSelected={isSelected}
        isError={isError || false}
        isSuccess={isSuccess || false}
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
              <Icon icon={CloseOutline} color={theme.assets["input-border"]} size={18} />
            </ButtonClear>
          )}
          <ChevronWrapper active={isOpen}>
            <Icon icon={ChevronDown} color={theme.assets["input-border"]} size={23} />
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
        <BottomText
          errorMessage={!!errorMessage}
          successMessage={!!successMessage}
          size={size}
        >
          {errorMessage || helpText}
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
    isSelected ? theme.assets["primary-text"] : theme.assets["input-placeholder"]};
  height: ${({ size }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: "32px",
      md: "40px",
      lg: "48px",
    };
    return sizes[size];
  }};
  cursor: pointer;
  border: 1px solid transparent;
  ${({ theme, isError, isOpen, isSuccess }) => {
    if (isOpen) {
      return css`
        border-color: transparent;
        box-shadow: ${({ theme }) => theme.shadows.outline};
      `;
    }

    if (isError) {
      return css`
        border-color: ${theme.assets.error};
      `;
    }

    if (isSuccess) {
      return css`
        border-color: ${theme.assets.success};
      `;
    }

    return css`
      border-color: ${theme.assets["input-border"]};
    `;
  }};
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        background-color: ${theme.assets["disabled"]};
        border-color: transparent;
        cursor: not-allowed;
        color: ${({ theme }) => theme.assets["disabled-font"]};
      `;
    }
  }};
`;

const InnerContainer = styled.div<{ size: SelectSizeType }>`
  padding: 0 1rem;
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
  background-color: ${({ theme }) => theme.colors.grey[2]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  width: 100%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
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
  padding: 8px 12px;
  margin-bottom: 4px;
  text-align: left;
  color: ${({ theme }) => theme.assets["primary-text"]};
  &:last-child {
    margin-bottom: 0;
  }
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.assets.brand};
          color: ${theme.colors.grey[1]};
        `
      : css`
          &:hover:not([disabled]) {
            background-color: ${theme.assets.brand};
            color: ${({ theme }) => theme.colors.grey[1]};
          }
        `};
  &:disabled {
    background-color: none;
    color: ${({ theme }) => theme.assets["disabled"]};
    cursor: not-allowed;
  }
`;

const BottomText = styled.div<{
  errorMessage: boolean;
  size: SelectSizeType;
  successMessage: boolean;
}>`
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ errorMessage, theme, successMessage }) => {
    if (errorMessage) {
      return theme.assets.error;
    }

    if (successMessage) {
      return theme.assets.success;
    }
    return theme.assets["secondary-text"];
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
  transition: transform ${({ theme }) => theme.transitions.normal}ms ease;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

const ButtonClear = styled.button`
  line-height: 0;
`;
