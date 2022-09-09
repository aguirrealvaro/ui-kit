import { FunctionComponent, ChangeEvent, InputHTMLAttributes, ReactNode, useRef } from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { Alert } from "@styled-icons/remix-fill/Alert";
import styled, { css } from "styled-components";
import { Spinner, StyledIcon } from "..";
import { theme } from "../App";

type InputProps = {
  helpText?: ReactNode;
  error?: string;
  isSuccess?: boolean;
  className?: string;
  inputId?: string;
  isLoading?: boolean;
};

export const Input: FunctionComponent<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
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

  const showSideContainer = isLoading || !!error || isSuccess || false;

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
            id={inputId}
            hasPlaceholder={!!placeholder}
            ref={inputRef}
            error={!!error}
            isSuccess={isSuccess || false}
            disabled={disabled}
            {...inputProps}
          />
          <Label htmlFor={inputId}>{placeholder}</Label>
        </InnerContainer>
        {showSideContainer && (
          <SideContainer>
            {isLoading && <Spinner size="mini" />}
            {error && <StyledIcon icon={Alert} size="18px" color={theme.colors.red} />}
            {isSuccess && (
              <StyledIcon icon={CheckCircleFill} size="18px" color={theme.colors.green} />
            )}
          </SideContainer>
        )}
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
        border-radius: 4px;
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

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  transition: 0.2s;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.grey};
`;

const getFocusedLabelStyles = css`
  top: 7px;
  transform: none;
  font-size: 0.75rem;
  font-weight: 500;
`;

const CustomInput = styled.input<{
  error: boolean;
  hasPlaceholder: boolean;
  isSuccess: boolean;
}>`
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  position: absolute;
  left: 1rem;
  right: 1rem;
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
`;

const BottomText = styled.div<{ error: boolean }>`
  font-size: 13px;
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) => theme.colors[error ? "red" : "grey"]};
`;

const SideContainer = styled.div`
  margin: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
