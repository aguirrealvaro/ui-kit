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
  error?: string;
  isSuccess?: boolean;
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
  error,
  isSuccess,
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
    !!error ||
    isSuccess ||
    (!!value && !!clearValue) ||
    !!icon ||
    type === "password";

  const showBottom: boolean = !!helpText || !!error;

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
        error={!!error}
        isSuccess={isSuccess || false}
        onClick={focusInput}
      >
        <InnerContainer>
          <CustomInput
            id={inputId}
            hasPlaceholder={!!placeholder}
            ref={inputRef}
            error={!!error}
            isSuccess={isSuccess || false}
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
                <Icon icon={CloseOutline} color={theme.assets.neutral} size={18} />
              </ButtonIcon>
            )}
            {error && <Icon icon={CloseCircle} size={18} color={theme.assets.error} />}
            {isSuccess && (
              <Icon icon={CheckCircleFill} size={18} color={theme.assets.success} />
            )}
            {type === "password" && (
              <ButtonIcon onClick={handleSeePassword}>
                <Icon
                  icon={seePassword ? EyeSlashFill : EyeFill}
                  size={18}
                  color={theme.assets.neutral}
                />
              </ButtonIcon>
            )}
          </SideContainer>
        )}
      </InputContainer>
      {showBottom && <BottomText error={!!error}>{error || helpText}</BottomText>}
    </div>
  );
};

const InputContainer = styled.div<{
  disabled: boolean;
  error: boolean;
  isSuccess: boolean;
}>`
  display: flex;
  justify-content: space-between;
  font-family: inherit;
  position: relative;
  height: 55px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  border: 1px solid transparent;
  ${({ error, isSuccess, theme }) => {
    if (error) {
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
  gap: 1rem;
`;

const Placeholder = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  transition: all ${({ theme }) => theme.transitions.normal}ms ease;
  pointer-events: none;
  color: ${({ theme }) => theme.assets["input-placeholder"]};
`;

const getFocusedLabelStyles = css`
  top: 7px;
  transform: none;
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
`;

const CustomInput = styled.input<{
  error: boolean;
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
    color: ${({ theme, error, isSuccess }) => {
      if (error) {
        return theme.assets.error;
      }

      if (isSuccess) {
        return theme.assets.success;
      }

      return theme.assets.brand;
    }};
  }
  &:not(:placeholder-shown) {
    &:not(:focus) {
      + label {
        ${getFocusedLabelStyles};
        color: ${({ theme, error, isSuccess }) => {
          if (error) {
            return theme.assets.error;
          }

          if (isSuccess) {
            return theme.assets.success;
          }

          return theme.assets.neutral;
        }};
      }
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const BottomText = styled.div<{ error: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) =>
    error ? theme.assets.error : theme.assets["secondary-text"]};
`;

const ButtonIcon = styled.button`
  line-height: 0;
`;
