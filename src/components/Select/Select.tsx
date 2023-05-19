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
import { ChevronDown, X } from "lucide-react";
import styled, { css } from "styled-components";
import { useKeyboardInteractions } from "./hooks";
import { SelectFieldType, SelectSizeType } from "./Select.types";
import { Spinner, Icon, IconButton } from "@/components";
import { useOutsideClick } from "@/hooks";

type SelectProps = {
  id: string;
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
  startElement?: ReactNode;
};

export const Select: FunctionComponent<SelectProps> = ({
  id,
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
  startElement,
}) => {
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

  const labelId = `${id}-label`;
  const dropdownId = `${id}-dropdown`;
  const errorMessageId = `${id}-error`;

  const { focusedIndex, handleKeyDown } = useKeyboardInteractions({
    isOpen,
    setIsOpen,
    options,
    value,
    clearValue,
    selectRef,
    optionsRef,
  });

  const getOptionId = (index: number | undefined) => {
    if (index !== undefined) {
      return `${id}-option-${index}`;
    }
  };

  const renderBottomText = (): JSX.Element => {
    if (errorMessage) {
      return (
        <ErrorMessage id={errorMessageId} aria-live="assertive">
          {errorMessage}
        </ErrorMessage>
      );
    }

    if (successMessage) {
      return <SuccessMessage>{successMessage}</SuccessMessage>;
    }

    return <HelpText>{helpText}</HelpText>;
  };

  return (
    <div>
      {label && (
        <Label size={size} id={labelId}>
          {label}
        </Label>
      )}
      <SelectContainer
        id={id}
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
        aria-controls={dropdownId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={labelId}
        aria-activedescendant={isOpen ? getOptionId(focusedIndex) : ""}
        onKeyDown={handleKeyDown}
        aria-invalid={isError}
        {...(errorMessage && { "aria-errormessage": errorMessageId })}
      >
        <InnerContainer size={size}>
          {startElement ? startElement : null}
          <span>{selectedLabel || placeholder}</span>
        </InnerContainer>
        <SideContainer>
          {isLoading && <Spinner size="xs" />}
          {isSelected && clearValue && (
            <IconButton size="sm" onClick={handleClearValue}>
              <Icon icon={X} size={18} />
            </IconButton>
          )}
          <ChevronWrapper active={isOpen} aria-hidden="true">
            <Icon icon={ChevronDown} size={18} />
          </ChevronWrapper>
        </SideContainer>
        <Dropdown
          isOpen={isOpen}
          size={size}
          role="listbox"
          id={dropdownId}
          aria-labelledby={labelId}
          selectHeight={selectRef.current?.offsetHeight}
        >
          {options.map((option, index) => {
            const onClick = () => onChange(option.value);
            const isSelected = value === option.value;
            return (
              <Option
                role="option"
                type="button"
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
      </SelectContainer>
      {showBottom && <BottomText size={size}>{renderBottomText()}</BottomText>}
    </div>
  );
};

const Label = styled.label<{ size: SelectSizeType }>`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.vars.textSecondary};
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
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.vars.textPrimary : theme.vars.textSecondary};
  height: ${({ size, theme }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: theme.spacing[8],
      md: theme.spacing[10],
      lg: theme.spacing[12],
    };
    return sizes[size];
  }};
  cursor: pointer;
  border: 1px solid transparent;
  border-color: ${({ theme, isError, isSuccess }) => {
    if (isError) {
      return theme.colors.red.default;
    }

    if (isSuccess) {
      return theme.colors.green.default;
    }

    return theme.vars.border;
  }};
  outline: none;
  &:focus {
    border-color: transparent;
    outline: 2px solid
      ${({ theme, isError, isSuccess }) => {
        if (isError) {
          return theme.colors.red.default;
        }

        if (isSuccess) {
          return theme.colors.green.default;
        }

        return theme.colors.grey.default;
      }};
  }
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        background-color: ${theme.vars.disabledPrimary};
        border-color: transparent;
        cursor: not-allowed;
      `;
    }
  }};
`;

const InnerContainer = styled.div<{ size: SelectSizeType }>`
  padding: 0 ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
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

const Dropdown = styled.div<{
  size: SelectSizeType;
  isOpen: boolean;
  selectHeight: number | undefined;
}>`
  position: absolute;
  top: ${({ selectHeight }) => {
    if (selectHeight) {
      return `calc(${selectHeight}px + 2px)`;
    }
  }};
  z-index: ${({ theme }) => theme.zIndex.selectDropdown};
  padding: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.vars.border};
  background-color: ${({ theme }) => theme.vars.bgPrimary};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  width: 100%;
  max-height: 250px;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  overflow-y: auto;
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
  color: ${({ theme }) => theme.vars.textPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.colors.grey.default};
          color: ${theme.colors.white};
        `
      : css`
          &:hover:not([disabled]) {
            background-color: ${theme.vars.hover};
          }
        `};
  &:disabled {
    background-color: none;
    color: ${({ theme }) => theme.vars.disabledPrimary};
    cursor: not-allowed;
  }
`;

const BottomText = styled.span<{
  size: SelectSizeType;
}>`
  display: block;
  margin: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]} 0
    ${({ theme }) => theme.spacing[4]};
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

const HelpText = styled.span`
  color: ${({ theme }) => theme.vars.textSecondary};
`;

const SuccessMessage = styled.span`
  color: ${({ theme }) => theme.colors.green.default};
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red.default};
`;
