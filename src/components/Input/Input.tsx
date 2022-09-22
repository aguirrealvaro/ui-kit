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
  error?: string;
  isSuccess?: boolean;
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
  error,
  isSuccess,
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
    !!error ||
    isSuccess ||
    (!!value && !!clearValue) ||
    !!rightIcon ||
    type === "password";

  const showBottom: boolean = !!helpText || !!error;

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
        error={!!error}
        isSuccess={isSuccess || false}
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
                <Icon icon={CloseOutline} color={theme.colors.grey} size={18} />
              </ButtonIcon>
            )}
            {error && <Icon icon={CloseCircle} size={18} color={theme.colors.red} />}
            {isSuccess && <Icon icon={CheckCircleFill} size={18} color={theme.colors.green} />}
            {type === "password" && (
              <ButtonIcon onClick={handleSeePassword}>
                <Icon
                  icon={seePassword ? EyeSlashFill : EyeFill}
                  size={18}
                  color={theme.colors.grey}
                />
              </ButtonIcon>
            )}
          </RightContainer>
        )}
      </InputContainer>
      {showBottom && (
        <BottomText error={!!error} size={size}>
          {error || helpText}
        </BottomText>
      )}
    </div>
  );
};

const Label = styled.label<{ size: InputSizeType }>`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: ${({ size }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: "14px",
      md: "16px",
      lg: "18px",
    };
    return sizes[size];
  }};
`;

const InputContainer = styled.div<{
  disabled: boolean;
  error: boolean;
  isSuccess: boolean;
  size: InputSizeType;
}>`
  display: flex;
  justify-content: space-between;
  font-family: inherit;
  border-radius: 4px;
  ${({ error, isSuccess, theme }) => {
    if (error) {
      return css`
        border: 1px solid ${theme.colors.red};
      `;
    }
    if (isSuccess) {
      return css`
        border: 1px solid ${theme.colors.green};
      `;
    }
    return css`
      border: 1px solid rgba(0, 0, 0, 0.2);
      &:focus-within {
        border: 1px solid ${theme.colors.blue};
      }
    `;
  }};
  height: ${({ size }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: "32px",
      md: "40px",
      lg: "48px",
    };
    return sizes[size];
  }};
  ${({ disabled }) =>
    disabled &&
    css`
      background: #e9e9e9;
      border: 1px solid transparent;
      cursor: not-allowed;
    `};
`;

const LeftContainer = styled.div`
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RightContainer = styled.div`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CustomInput = styled.input<{
  sideWidth: number | undefined;
  inputSize: InputSizeType;
}>`
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 1rem;
  width: ${({ sideWidth }) => {
    if (sideWidth) {
      return `calc(100% - ${sideWidth}px - 20px)`;
    } else {
      return "100%";
    }
  }};
  font-size: ${({ inputSize }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: "14px",
      md: "16px",
      lg: "18px",
    };
    return sizes[inputSize];
  }};
  &:disabled {
    cursor: not-allowed;
  }
`;

const BottomText = styled.div<{ error: boolean; size: InputSizeType }>`
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) => theme.colors[error ? "red" : "grey"]};
  font-size: ${({ size }) => {
    const sizes: Record<InputSizeType, string> = {
      sm: "12px",
      md: "14px",
      lg: "16px",
    };
    return sizes[size];
  }};
`;

const ButtonIcon = styled.button`
  line-height: 0;
`;
