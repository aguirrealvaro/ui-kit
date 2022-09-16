import {
  FunctionComponent,
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useLayoutEffect,
  useState,
} from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { Minus } from "@styled-icons/boxicons-regular/Minus";
import { Plus } from "@styled-icons/boxicons-regular/Plus";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css } from "styled-components";
import { ANIMATION_TIME } from "./NumberInput.constants";
import { Spinner, Icon } from "@/components";
import { theme } from "@/components/App";

type NumberInputProps = {
  helpText?: ReactNode;
  error?: string;
  isSuccess?: boolean;
  className?: string;
  inputId?: string;
  isLoading?: boolean;
};

export const NumberInput: FunctionComponent<
  NumberInputProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  placeholder,
  onChange,
  helpText,
  error,
  isSuccess,
  className,
  disabled,
  inputId,
  isLoading,
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const onValidChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) onChange?.(e);
  };

  const inputProps = {
    placeholder: " ",
    onChange: onValidChange,
    ...restProps,
  };

  const sideContainerRef = useRef<HTMLDivElement>(null);

  const [sideContainerWidth, setSideContainerWidth] = useState<number | undefined>(undefined);

  useLayoutEffect(() => {
    setSideContainerWidth(sideContainerRef.current?.offsetWidth);
  }, []);

  return (
    <div className={className}>
      <InputContainer
        disabled={disabled || false}
        error={!!error}
        isSuccess={isSuccess || false}
        onClick={focusInput}
      >
        <InnerContainer>
          <CustomInput
            type="number"
            id={inputId}
            hasPlaceholder={!!placeholder}
            ref={inputRef}
            error={!!error}
            isSuccess={isSuccess || false}
            disabled={disabled}
            sideWidth={sideContainerWidth}
            {...inputProps}
          />
          <Placeholder htmlFor={inputId}>{placeholder}</Placeholder>
        </InnerContainer>
        <SideContainer ref={sideContainerRef}>
          {isLoading && <Spinner size="xs" />}
          {error && <Icon icon={CloseCircle} size={18} color={theme.colors.red} />}
          {isSuccess && <Icon icon={CheckCircleFill} size={18} color={theme.colors.green} />}
          <StepContainer>
            <StepButton onClick={() => inputRef.current?.stepDown()}>
              <Icon icon={Minus} size={22} color={theme.colors.black} />
            </StepButton>
            <StepButton onClick={() => inputRef.current?.stepUp()}>
              <Icon icon={Plus} size={22} color={theme.colors.black} />
            </StepButton>
          </StepContainer>
        </SideContainer>
      </InputContainer>
      {(helpText || error) && <BottomText error={!!error}>{error || helpText}</BottomText>}
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
      border: 1px solid rgba(0, 0, 0, 0.36);
      &:focus-within {
        border: 1px solid ${theme.colors.blue};
      }
    `;
  }};
  ${({ disabled }) =>
    disabled &&
    css`
      background: #e9e9e9;
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
  align-items: stretch;
`;

const Placeholder = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  transition: all ${ANIMATION_TIME}ms ease;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.grey};
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
  &:focus + label {
    ${getFocusedLabelStyles};
    color: ${({ theme, error, isSuccess }) => {
      if (error) {
        return theme.colors.red;
      }

      if (isSuccess) {
        return theme.colors.green;
      }

      return theme.colors.blue;
    }};
  }
  &:not(:placeholder-shown) {
    &:not(:focus) {
      + label {
        ${getFocusedLabelStyles};
        color: ${({ theme, error, isSuccess }) => {
          if (error) {
            return theme.colors.red;
          }

          if (isSuccess) {
            return theme.colors.green;
          }

          return theme.colors.grey;
        }};
      }
    }
  }
  &:disabled {
    cursor: not-allowed;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const BottomText = styled.div<{ error: boolean }>`
  font-size: 13px;
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) => theme.colors[error ? "red" : "grey"]};
`;

const StepContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const StepButton = styled.button`
  line-height: 0;
`;
