import {
  FunctionComponent,
  MouseEvent,
  ReactNode,
  SelectHTMLAttributes,
  KeyboardEvent,
  useId,
} from "react";
import { ChevronDown, X } from "lucide-react";
import styled from "styled-components";
import { SelectSizeType } from "../Select/Select.types";
import { NativeSelectFieldType } from "./NativeSelect.types";
import { Icon, IconButton, Spinner } from "@/components";

type NativeSelectProps = {
  label?: ReactNode;
  options: NativeSelectFieldType[];
  clearValue?: () => void;
  helpMessage?: ReactNode;
  isError?: boolean;
  errorMessage?: ReactNode;
  isSuccess?: boolean;
  successMessage?: ReactNode;
  size?: SelectSizeType;
  isLoading?: boolean;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size" | "id">;

const NativeSelect: FunctionComponent<NativeSelectProps> = ({
  value,
  onChange,
  options,
  placeholder,
  clearValue,
  label,
  disabled,
  helpMessage,
  isError = false,
  errorMessage,
  isSuccess = false,
  successMessage,
  size = "md",
  isLoading,
  ...restProps
}) => {
  const id = useId();

  const handleClearValue = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    clearValue?.();
  };

  const isSelected = !!value;

  const showBottom: boolean = !!helpMessage || !!errorMessage || !!successMessage;

  const helpMessageId = `${id}-help`;
  const errorMessageId = `${id}-error`;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && value && clearValue) {
      event.preventDefault();
      clearValue();
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

    return <HelpMessage id={helpMessageId}>{helpMessage}</HelpMessage>;
  };

  return (
    <div>
      {label && (
        <Label htmlFor={id} $size={size}>
          {label}
        </Label>
      )}
      <SelectContainer>
        <Select
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          $isError={isError}
          $isSuccess={isSuccess}
          $selectSize={size}
          $isSelected={isSelected}
          onKeyDown={handleKeyDown}
          aria-invalid={isError}
          {...(helpMessage && { "aria-describedby": helpMessageId })}
          {...(errorMessage && { "aria-errormessage": errorMessageId })}
          {...restProps}
        >
          <Option hidden>{placeholder}</Option>
          {options.map(({ label, value, disabled }, index) => {
            return (
              <Option value={value} disabled={disabled} key={index}>
                {label}
              </Option>
            );
          })}
        </Select>
        <SideContainer>
          {isLoading && <Spinner size="xs" />}
          {isSelected && clearValue && (
            <CancelButtonWrapper>
              <IconButton size="sm" onClick={handleClearValue}>
                <Icon icon={X} size={18} />
              </IconButton>
            </CancelButtonWrapper>
          )}
          <ChevronWrapper aria-hidden="true">
            <Icon icon={ChevronDown} size={18} />
          </ChevronWrapper>
        </SideContainer>
      </SelectContainer>
      {showBottom && <BottomText $size={size}>{renderBottomText()}</BottomText>}
    </div>
  );
};

export { NativeSelect, type NativeSelectProps };

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const Label = styled.label<{ $size: SelectSizeType }>`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.tokens.textSecondary};
  font-size: ${({ $size, theme }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[$size];
  }};
`;

const Select = styled.select<{
  $isError: boolean;
  $isSuccess: boolean;
  $selectSize: SelectSizeType;
  $isSelected: boolean;
}>`
  font-size: ${({ $selectSize, theme }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[$selectSize];
  }};
  width: 100%;
  height: ${({ $selectSize, theme }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: theme.spacing[8],
      md: theme.spacing[10],
      lg: theme.spacing[12],
    };
    return sizes[$selectSize];
  }};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.tokens.textPrimary : theme.tokens.textSecondary};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  border: 1px solid transparent;
  border-color: ${({ theme, $isError, $isSuccess }) => {
    if ($isError) {
      return theme.colors.red.default;
    }

    if ($isSuccess) {
      return theme.colors.green.default;
    }

    return theme.tokens.border;
  }};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  &:focus {
    border-color: transparent;
    outline: 2px solid
      ${({ theme, $isError, $isSuccess }) => {
        if ($isError) {
          return theme.colors.red.default;
        }

        if ($isSuccess) {
          return theme.colors.green.default;
        }

        return theme.colors.grey.default;
      }};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.tokens.disabledPrimary};
    border-color: transparent;
    cursor: not-allowed;
  }
`;

const SideContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  right: ${({ theme }) => theme.spacing[4]};
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Option = styled.option`
  &:disabled {
    color: ${({ theme }) => theme.tokens.disabledPrimary};
  }
`;

const BottomText = styled.div<{ $size: SelectSizeType }>`
  display: block;
  margin: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]} 0
    ${({ theme }) => theme.spacing[4]};
  font-size: ${({ $size, theme }) => {
    const sizes: Record<SelectSizeType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[$size];
  }};
`;

const CancelButtonWrapper = styled.div`
  pointer-events: all;
`;

const ChevronWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HelpMessage = styled.span`
  color: ${({ theme }) => theme.tokens.textSecondary};
`;

const SuccessMessage = styled.span`
  color: ${({ theme }) => theme.colors.green.default};
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red.default};
`;
