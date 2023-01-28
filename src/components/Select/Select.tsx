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
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { ChevronDown } from "@styled-icons/fluentui-system-filled/ChevronDown";
import styled, { css } from "styled-components";
import { SelectFieldType, SelectSizeType } from "./Select.types";
import { Spinner, Icon, IconButton } from "@/components";
import { useOutsideClick } from "@/hooks";

type SelectProps = {
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

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeDropdown = useCallback(() => setIsOpen(false), []);

  useOutsideClick({ ref: selectRef, handler: closeDropdown, enabled: isOpen });

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
        isError={isError}
        isSuccess={isSuccess}
        isOpen={isOpen}
        size={size}
        onClick={handleDropdown}
        ref={selectRef}
      >
        <InnerContainer size={size}>
          <span>{selectedValue || placeholder}</span>
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
  ${({ theme, isError, isOpen, isSuccess }) => {
    if (isOpen) {
      return css`
        border-color: transparent;
        box-shadow: ${({ theme }) => theme.shadows["outline-primary"]};
      `;
    }

    if (isError) {
      return css`
        border-color: ${theme.assets.danger};
      `;
    }

    if (isSuccess) {
      return css`
        border-color: ${theme.assets.success};
      `;
    }

    return css`
      border-color: ${theme.assets.border};
    `;
  }};
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

const Dropdown = styled.div<{ size: SelectSizeType }>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  padding: ${({ theme }) => theme.sizes[2]};
  border: 1px solid ${({ theme }) => theme.assets.border};
  background-color: ${({ theme }) => theme.assets.bgPrimary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  width: 100%;
  max-height: 250px;
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
