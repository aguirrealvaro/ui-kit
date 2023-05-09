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
import { CheckCircle2, XCircle, X, Eye, EyeOff } from "lucide-react";
import styled, { css } from "styled-components";
import { Spinner, Icon, IconButton } from "@/components";
import { theme } from "@/css";

type AnimatedInputProps = {
  id: string;
  helpText?: ReactNode;
  isError?: boolean;
  errorMessage?: ReactNode;
  isSuccess?: boolean;
  successMessage?: ReactNode;
  isLoading?: boolean;
  clearValue?: () => void;
  icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const AnimatedInput: FunctionComponent<AnimatedInputProps> = ({
  id,
  placeholder,
  onChange,
  helpText,
  isError = false,
  errorMessage,
  isSuccess = false,
  successMessage,
  disabled,
  isLoading,
  value,
  clearValue,
  icon,
  type,
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

  const showSideContainer: boolean =
    isLoading ||
    isError ||
    isSuccess ||
    (!!value && !!clearValue) ||
    !!icon ||
    type === "password";

  const showBottom: boolean = !!helpText || !!errorMessage || !!successMessage;

  const errorMessageId = `${id}-error`;

  const sideContainerRef = useRef<HTMLDivElement>(null);

  const [sideContainerWidth, setSideContainerWidth] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    if (!showSideContainer) return;

    setSideContainerWidth(sideContainerRef.current?.offsetWidth);
  }, [showSideContainer, value]);

  const handleSeePassword = (e: MouseEvent<HTMLButtonElement>) => {
    if (type !== "password") return;
    e.stopPropagation();
    setSeePassword(!seePassword);
  };

  const handleInputKeyDown = (event: KeyboardEvent) => {
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
      <InputContainer
        disabled={disabled || false}
        isError={isError}
        isSuccess={isSuccess}
        onClick={focusInput}
        onKeyDown={handleInputKeyDown}
      >
        <InnerContainer>
          <CustomInput
            id={id}
            hasPlaceholder={!!placeholder}
            ref={inputRef}
            isError={isError}
            isSuccess={isSuccess}
            disabled={disabled}
            sideWidth={sideContainerWidth}
            value={value}
            placeholder=" "
            type={seePassword ? "text" : type}
            onChange={onValidChange}
            aria-invalid={isError}
            {...(errorMessage && { "aria-errormessage": errorMessageId })}
            {...restProps}
          />
          <Placeholder htmlFor={id}>{placeholder}</Placeholder>
        </InnerContainer>
        {showSideContainer && (
          <SideContainer ref={sideContainerRef}>
            {icon ? icon : null}
            {isLoading && <Spinner size="xs" />}
            {value && clearValue && (
              <IconButton size="sm" onClick={clearValue}>
                <Icon icon={X} size={18} />
              </IconButton>
            )}
            {isError && <Icon icon={XCircle} size={18} color={theme.assets.red} />}
            {isSuccess && <Icon icon={CheckCircle2} size={18} color={theme.assets.green} />}
            {type === "password" && (
              <IconButton size="sm" onClick={handleSeePassword}>
                <Icon icon={seePassword ? EyeOff : Eye} size={18} />
              </IconButton>
            )}
          </SideContainer>
        )}
      </InputContainer>
      {showBottom && <BottomText>{renderBottomText()}</BottomText>}
    </div>
  );
};

const InputContainer = styled.div<{
  disabled: boolean;
  isError: boolean;
  isSuccess: boolean;
}>`
  display: flex;
  justify-content: space-between;
  font-family: inherit;
  position: relative;
  height: ${({ theme }) => theme.sizes[14]};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: 1px solid transparent;
  ${({ isError, isSuccess, theme }) => {
    if (isError) {
      return css`
        border-color: ${theme.assets.red};
        &:focus-within {
          outline: 2px solid ${({ theme }) => theme.assets.red};
          border-color: transparent;
        }
      `;
    }

    if (isSuccess) {
      return css`
        border-color: ${theme.assets.green};
        &:focus-within {
          outline: 2px solid ${({ theme }) => theme.assets.green};
          border-color: transparent;
        }
      `;
    }

    return css`
      border-color: ${({ theme }) => theme.assets.border};
      &:focus-within {
        outline: 2px solid ${({ theme }) => theme.assets.blue};
        border-color: transparent;
      }
    `;
  }};
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.assets.disabledPrimary};
      border-color: transparent;
      cursor: not-allowed;
    `};
`;

const InnerContainer = styled.div`
  width: 100%;
`;

const SideContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing[6]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

const Placeholder = styled.label`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.spacing[4]};
  transform: translateY(-50%);
  transition: all ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  pointer-events: none;
  color: ${({ theme }) => theme.assets.textSecondary};
`;

const getFocusedLabelStyles = css`
  top: ${({ theme }) => theme.spacing[2]};
  transform: none;
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
`;

const CustomInput = styled.input<{
  isError: boolean;
  hasPlaceholder: boolean;
  isSuccess: boolean;
  sideWidth: number | undefined;
}>`
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  outline: none;
  border: none;
  background-color: transparent;
  position: absolute;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  width: ${({ sideWidth }) => {
    if (sideWidth) {
      return `calc(100% - ${sideWidth}px - 20px)`;
    } else {
      return "100%";
    }
  }};
  height: ${({ hasPlaceholder }) => (hasPlaceholder ? "72%" : "100%")};
  bottom: 0;
  color: ${({ theme }) => theme.assets.textPrimary};
  &:focus + label {
    ${getFocusedLabelStyles};
    color: ${({ theme, isError, isSuccess }) => {
      if (isError) {
        return theme.assets.red;
      }

      if (isSuccess) {
        return theme.assets.green;
      }

      return theme.assets.blue;
    }};
  }
  &:not(:placeholder-shown) {
    &:not(:focus) {
      + label {
        ${getFocusedLabelStyles};
        color: ${({ theme, isError, isSuccess }) => {
          if (isError) {
            return theme.assets.red;
          }

          if (isSuccess) {
            return theme.assets.green;
          }

          return theme.assets.textSecondary;
        }};
      }
    }
  }
  &:disabled {
    cursor: not-allowed;
    color: inherit;
  }
`;

const BottomText = styled.div`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  margin: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]} 0
    ${({ theme }) => theme.spacing[4]};
`;

const HelpText = styled.span`
  color: ${({ theme }) => theme.assets.textSecondary};
`;

const SuccessMessage = styled.span`
  color: ${({ theme }) => theme.assets.green};
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.assets.red};
`;
