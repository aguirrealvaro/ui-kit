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
import { ANIMATION_TIME } from "./AnimatedInput.constants";
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
                <Icon icon={CloseOutline} color={theme.colors.grey.base} size={18} />
              </ButtonIcon>
            )}
            {error && <Icon icon={CloseCircle} size={18} color={theme.colors.red.base} />}
            {isSuccess && (
              <Icon icon={CheckCircleFill} size={18} color={theme.colors.green.base} />
            )}
            {type === "password" && (
              <ButtonIcon onClick={handleSeePassword}>
                <Icon
                  icon={seePassword ? EyeSlashFill : EyeFill}
                  size={18}
                  color={theme.colors.grey.base}
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
  ${({ error, isSuccess, theme }) => {
    if (error) {
      return css`
        border: 1px solid ${theme.colors.red.base};
      `;
    }

    if (isSuccess) {
      return css`
        border: 1px solid ${theme.colors.green.base};
      `;
    }

    return css`
      border: 1px solid ${({ theme }) => theme.colors.grey[5]};
      &:focus-within {
        border: 1px solid ${theme.colors.blue.base};
      }
    `;
  }};
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.colors.grey[5]};
      border: 1px solid transparent;
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
  transition: all ${ANIMATION_TIME}ms ease;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.grey.base};
`;

const getFocusedLabelStyles = css`
  top: 7px;
  transform: none;
  font-size: 0.75rem;
`;

const CustomInput = styled.input<{
  error: boolean;
  hasPlaceholder: boolean;
  isSuccess: boolean;
  sideWidth: number | undefined;
}>`
  font-size: 16px;
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
  color: ${({ theme }) => theme.colors.grey[12]};
  &:focus + label {
    ${getFocusedLabelStyles};
    color: ${({ theme, error, isSuccess }) => {
      if (error) {
        return theme.colors.red.base;
      }

      if (isSuccess) {
        return theme.colors.green.base;
      }

      return theme.colors.blue.base;
    }};
  }
  &:not(:placeholder-shown) {
    &:not(:focus) {
      + label {
        ${getFocusedLabelStyles};
        color: ${({ theme, error, isSuccess }) => {
          if (error) {
            return theme.colors.red.base;
          }

          if (isSuccess) {
            return theme.colors.green.base;
          }

          return theme.colors.grey.base;
        }};
      }
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const BottomText = styled.div<{ error: boolean }>`
  font-size: 14px;
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) => theme.colors[error ? "red" : "grey"].base};
`;

const ButtonIcon = styled.button`
  line-height: 0;
`;
