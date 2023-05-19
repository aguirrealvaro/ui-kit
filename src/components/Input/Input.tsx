import {
  FunctionComponent,
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useLayoutEffect,
  useState,
  MouseEvent,
  KeyboardEvent,
} from "react";
import { CheckCircle2, Eye, EyeOff, X, XCircle } from "lucide-react";
import styled, { css } from "styled-components";
import { InputSizeType } from "./Input.types";
import { Spinner, IconButton, Icon } from "@/components";
import { theme } from "@/css";

type InputProps = {
  id: string;
  label?: ReactNode;
  helpText?: ReactNode;
  isError?: boolean;
  errorMessage?: ReactNode;
  isSuccess?: boolean;
  successMessage?: ReactNode;
  isLoading?: boolean;
  clearValue?: () => void;
  endElement?: ReactNode;
  startElement?: ReactNode;
  size?: InputSizeType;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export const Input: FunctionComponent<InputProps> = ({
  id,
  label,
  helpText,
  isError = false,
  errorMessage,
  isSuccess = false,
  successMessage,
  isLoading,
  clearValue,
  endElement,
  startElement,
  onChange,
  disabled,
  value,
  type,
  size = "md",
  ...restProps
}) => {
  const [seePassword, setSeePassword] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const onValidChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) onChange?.(e);
  };

  const showLeftContainer = !!startElement;

  const showRightContainer: boolean =
    isLoading ||
    isError ||
    isSuccess ||
    (!!value && !!clearValue) ||
    !!endElement ||
    type === "password";

  const showBottom: boolean = !!helpText || !!errorMessage || !!successMessage;

  const errorMessageId = `${id}-error`;

  const rightContainerRef = useRef<HTMLDivElement>(null);

  const [rightContainerWidth, setRightContainerWidth] = useState<number | undefined>(
    undefined
  );

  useLayoutEffect(() => {
    if (!showRightContainer) return;

    setRightContainerWidth(rightContainerRef.current?.offsetWidth);
  }, [showRightContainer, value]);

  const handleSeePassword = (e: MouseEvent<HTMLButtonElement>) => {
    if (type !== "password") return;
    e.stopPropagation();
    setSeePassword(!seePassword);
  };

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

    return <HelpText>{helpText}</HelpText>;
  };

  return (
    <div>
      {label && (
        <Label htmlFor={id} $size={size}>
          {label}
        </Label>
      )}
      <InputContainer
        $disabled={disabled || false}
        $isError={isError}
        $isSuccess={isSuccess}
        onClick={focusInput}
        $size={size}
        onKeyDown={handleKeyDown}
      >
        {showLeftContainer && (
          <LeftContainer>{startElement ? startElement : null}</LeftContainer>
        )}
        <CustomInput
          id={id}
          ref={inputRef}
          disabled={disabled}
          $sideWidth={rightContainerWidth}
          value={value}
          onChange={onValidChange}
          type={seePassword ? "text" : type}
          $inputSize={size}
          aria-invalid={isError}
          {...(errorMessage && { "aria-errormessage": errorMessageId })}
          {...restProps}
        />
        {showRightContainer && (
          <RightContainer ref={rightContainerRef}>
            {endElement ? endElement : null}
            {isLoading && <Spinner size="xs" />}
            {value && clearValue && (
              <IconButton size="sm" onClick={clearValue}>
                <Icon icon={X} size={18} />
              </IconButton>
            )}
            {isError && <Icon icon={XCircle} size={18} color={theme.colors.red.default} />}
            {isSuccess && (
              <Icon icon={CheckCircle2} size={18} color={theme.colors.green.default} />
            )}
            {type === "password" && (
              <IconButton size="sm" onClick={handleSeePassword}>
                <Icon icon={seePassword ? EyeOff : Eye} size={18} />
              </IconButton>
            )}
          </RightContainer>
        )}
      </InputContainer>
      {showBottom && <BottomText $size={size}>{renderBottomText()}</BottomText>}
    </div>
  );
};

const Label = styled.label<{ $size: InputSizeType }>`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.vars.textSecondary};
  font-size: ${({ $size, theme }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[$size];
  }};
`;

const InputContainer = styled.div<{
  $disabled: boolean;
  $isError: boolean;
  $isSuccess: boolean;
  $size: InputSizeType;
}>`
  display: flex;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: 1px solid transparent;
  ${({ $isError, $isSuccess, theme }) => {
    if ($isError) {
      return css`
        border-color: ${theme.colors.red.default};
        &:focus-within {
          outline: 2px solid ${({ theme }) => theme.colors.red.default};
          border-color: transparent;
        }
      `;
    }
    if ($isSuccess) {
      return css`
        border-color: ${theme.colors.green.default};
        &:focus-within {
          outline: 2px solid ${({ theme }) => theme.colors.green.default};
          border-color: transparent;
        }
      `;
    }
    return css`
      border-color: ${({ theme }) => theme.vars.border};
      &:focus-within {
        outline: 2px solid ${({ theme }) => theme.colors.grey.default};
        border-color: transparent;
      }
    `;
  }};
  height: ${({ $size, theme }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: theme.spacing[8],
      md: theme.spacing[10],
      lg: theme.spacing[12],
    };
    return sizes[$size];
  }};
  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      background-color: ${theme.vars.disabledPrimary};
      border: transparent;
      cursor: not-allowed;
    `};
`;

const LeftContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacing[6]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const RightContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing[6]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const CustomInput = styled.input<{
  $sideWidth: number | undefined;
  $inputSize: InputSizeType;
}>`
  font-family: inherit;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.vars.textPrimary};
  width: ${({ $sideWidth }) => {
    if ($sideWidth) {
      return `calc(100% - ${$sideWidth}px - 20px)`;
    } else {
      return "100%";
    }
  }};
  font-size: ${({ $inputSize, theme }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[$inputSize];
  }};
  &:disabled {
    cursor: not-allowed;
  }
  &::placeholder {
    color: ${({ theme }) => theme.vars.textSecondary};
  }
`;

const BottomText = styled.div<{ $size: InputSizeType }>`
  display: block;
  margin: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]} 0
    ${({ theme }) => theme.spacing[4]};
  font-size: ${({ $size, theme }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[$size];
  }};
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
