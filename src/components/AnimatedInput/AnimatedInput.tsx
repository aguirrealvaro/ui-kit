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
import { Spinner, Icon } from "@/components";
import { useTheme } from "@/hooks";

type AnimatedInputProps = {
  helpText?: ReactNode;
  isError?: boolean;
  errorMessage?: ReactNode;
  isSuccess?: boolean;
  successMessage?: ReactNode;
  inputId?: string;
  isLoading?: boolean;
  clearValue?: () => void;
  icon?: ReactNode;
};

export const AnimatedInput: FunctionComponent<
  AnimatedInputProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  placeholder,
  onChange,
  helpText,
  isError = false,
  errorMessage,
  isSuccess = false,
  successMessage,
  disabled,
  inputId,
  isLoading,
  value,
  clearValue,
  icon,
  type,
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

  const showSideContainer: boolean =
    isLoading ||
    isError ||
    isSuccess ||
    (!!value && !!clearValue) ||
    !!icon ||
    type === "password";

  const showBottom: boolean = !!helpText || !!errorMessage || !!successMessage;

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

  return (
    <div>
      <InputContainer
        disabled={disabled || false}
        isError={isError}
        isSuccess={isSuccess}
        onClick={focusInput}
      >
        <InnerContainer>
          <CustomInput
            id={inputId}
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
            {...restProps}
          />
          <Placeholder htmlFor={inputId}>{placeholder}</Placeholder>
        </InnerContainer>
        {showSideContainer && (
          <SideContainer ref={sideContainerRef}>
            {icon ? icon : null}
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
          </SideContainer>
        )}
      </InputContainer>
      {showBottom && (
        <BottomText showErrorMessage={!!errorMessage} showSuccessMessage={!!successMessage}>
          {errorMessage || successMessage || helpText}
        </BottomText>
      )}
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
  height: 55px;
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
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.assets["disabled"]};
      border-color: transparent;
      cursor: not-allowed;
    `};
`;

const InnerContainer = styled.div`
  width: 100%;
`;

const SideContainer = styled.div`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const Placeholder = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  transition: all ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
  pointer-events: none;
  color: ${({ theme }) => theme.assets["input-placeholder"]};
`;

const getFocusedLabelStyles = css`
  top: 7px;
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
  padding: 0 1rem;
  width: ${({ sideWidth }) => {
    if (sideWidth) {
      return `calc(100% - ${sideWidth}px - 20px)`;
    } else {
      return "100%";
    }
  }};
  height: ${({ hasPlaceholder }) => (hasPlaceholder ? "72%" : "100%")};
  bottom: 0;
  color: ${({ theme }) => theme.assets["primary-text"]};
  &:focus + label {
    ${getFocusedLabelStyles};
    color: ${({ theme, isError, isSuccess }) => {
      if (isError) {
        return theme.assets.danger;
      }

      if (isSuccess) {
        return theme.assets.success;
      }

      return theme.assets.info;
    }};
  }
  &:not(:placeholder-shown) {
    &:not(:focus) {
      + label {
        ${getFocusedLabelStyles};
        color: ${({ theme, isError, isSuccess }) => {
          if (isError) {
            return theme.assets.danger;
          }

          if (isSuccess) {
            return theme.assets.success;
          }

          return theme.assets["primary-text"];
        }};
      }
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const BottomText = styled.div<{ showErrorMessage: boolean; showSuccessMessage: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
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
`;

const ButtonIcon = styled.button`
  line-height: 0;
`;
