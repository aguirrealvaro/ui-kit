import {
  FunctionComponent,
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useLayoutEffect,
  useState,
  MouseEvent,
} from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { EyeFill } from "@styled-icons/bootstrap/EyeFill";
import { EyeSlashFill } from "@styled-icons/bootstrap/EyeSlashFill";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css } from "styled-components";
import { InputSizeType } from "./Input.types";
import { Spinner, Icon } from "@/components";
import { useTheme } from "@/hooks";

type InputProps = {
  label?: ReactNode;
  helpText?: ReactNode;
  isError?: boolean;
  errorMessage?: ReactNode;
  isSuccess?: boolean;
  successMessage?: ReactNode;
  inputId?: string;
  isLoading?: boolean;
  clearValue?: () => void;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  size?: InputSizeType;
};

export const Input: FunctionComponent<
  InputProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size">
> = ({
  label,
  helpText,
  isError = false,
  errorMessage,
  isSuccess = false,
  successMessage,
  inputId,
  isLoading,
  clearValue,
  rightIcon,
  leftIcon,
  onChange,
  disabled,
  value,
  type,
  size = "md",
  ...restProps
}) => {
  const { theme } = useTheme();
  const [seePassword, setSeePassword] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const onValidChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) onChange?.(e);
  };

  const showLeftContainer = !!leftIcon;

  const showRightContainer: boolean =
    isLoading ||
    isError ||
    isSuccess ||
    (!!value && !!clearValue) ||
    !!rightIcon ||
    type === "password";

  const showBottom: boolean = !!helpText || !!errorMessage || !!successMessage;

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

  return (
    <div>
      {label && (
        <Label htmlFor={inputId} size={size}>
          {label}
        </Label>
      )}
      <InputContainer
        disabled={disabled || false}
        isError={isError}
        isSuccess={isSuccess}
        onClick={focusInput}
        size={size}
      >
        {showLeftContainer && <LeftContainer>{leftIcon ? leftIcon : null}</LeftContainer>}
        <CustomInput
          id={inputId}
          ref={inputRef}
          disabled={disabled}
          sideWidth={rightContainerWidth}
          value={value}
          onChange={onValidChange}
          type={seePassword ? "text" : type}
          inputSize={size}
          {...restProps}
        />
        {showRightContainer && (
          <RightContainer ref={rightContainerRef}>
            {rightIcon ? rightIcon : null}
            {isLoading && <Spinner size="xs" />}
            {value && clearValue && (
              <ButtonIcon onClick={clearValue}>
                <Icon icon={CloseOutline} size={18} />
              </ButtonIcon>
            )}
            {isError && <Icon icon={CloseCircle} size={18} color={theme.assets.danger} />}
            {isSuccess && (
              <Icon icon={CheckCircleFill} size={18} color={theme.assets.success} />
            )}
            {type === "password" && (
              <ButtonIcon onClick={handleSeePassword}>
                <Icon icon={seePassword ? EyeSlashFill : EyeFill} size={18} />
              </ButtonIcon>
            )}
          </RightContainer>
        )}
      </InputContainer>
      {showBottom && (
        <BottomText
          showErrorMessage={!!errorMessage}
          showSuccessMessage={!!successMessage}
          size={size}
        >
          {errorMessage || successMessage || helpText}
        </BottomText>
      )}
    </div>
  );
};

const Label = styled.label<{ size: InputSizeType }>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: ${({ size, theme }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;

const InputContainer = styled.div<{
  disabled: boolean;
  isError: boolean;
  isSuccess: boolean;
  size: InputSizeType;
}>`
  display: flex;
  justify-content: space-between;
  font-family: inherit;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: 1px solid transparent;
  ${({ isError, isSuccess, theme }) => {
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
      border-color: ${({ theme }) => theme.assets["input-border"]};
      &:focus-within {
        box-shadow: ${({ theme }) => theme.shadows.outline};
        border-color: transparent;
      }
    `;
  }};
  height: ${({ size, theme }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: theme.sizes[8],
      md: theme.sizes[10],
      lg: theme.sizes[12],
    };
    return sizes[size];
  }};
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.assets["disabled"]};
      border: transparent;
      cursor: not-allowed;
    `};
`;

const LeftContainer = styled.div`
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const RightContainer = styled.div`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const CustomInput = styled.input<{
  sideWidth: number | undefined;
  inputSize: InputSizeType;
}>`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 1rem;
  color: ${({ theme }) => theme.assets.textPrimary};
  width: ${({ sideWidth }) => {
    if (sideWidth) {
      return `calc(100% - ${sideWidth}px - 20px)`;
    } else {
      return "100%";
    }
  }};
  font-size: ${({ inputSize, theme }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[inputSize];
  }};
  &:disabled {
    cursor: not-allowed;
  }
  &::placeholder {
    color: ${({ theme }) => theme.assets["input-placeholder"]};
  }
`;

const BottomText = styled.div<{
  showErrorMessage: boolean;
  size: InputSizeType;
  showSuccessMessage: boolean;
}>`
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ showErrorMessage, theme, showSuccessMessage }) => {
    if (showErrorMessage) {
      return theme.assets.danger;
    }

    if (showSuccessMessage) {
      return theme.assets.success;
    }
    return theme.assets["secondary-text"];
  }};
  font-size: ${({ size, theme }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[size];
  }};
`;

const ButtonIcon = styled.button`
  line-height: 0;
`;
