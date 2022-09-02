import { FunctionComponent, ChangeEvent, InputHTMLAttributes, ReactNode, useRef } from "react";
import styled, { css } from "styled-components";
import { Spinner } from "../Spinner";

type InputProps = {
  helpText?: ReactNode;
  error?: string;
  className?: string;
  inputId?: string;
  isLoading?: boolean;
};

export const Input: FunctionComponent<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  onChange,
  helpText,
  error,
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
    error: !!error,
    ...restProps,
  };

  return (
    <div className={className}>
      <InputContainer disabled={disabled || false} error={!!error} onClick={focusInput}>
        <InnerContainer>
          <CustomInput
            id={inputId}
            hasPlaceholder={!!placeholder}
            ref={inputRef}
            disabled={disabled}
            {...inputProps}
          />
          <Label htmlFor={inputId}>{placeholder}</Label>
        </InnerContainer>
        {isLoading && (
          <SpinnerWrapper>
            <Spinner size="mini" />
          </SpinnerWrapper>
        )}
      </InputContainer>
      {(helpText || error) && <BottomText error={!!error}>{error || helpText}</BottomText>}
    </div>
  );
};

const InputContainer = styled.div<{
  disabled: boolean;
  error: boolean;
}>`
  display: flex;
  justify-content: space-between;
  font-family: inherit;
  position: relative;
  height: 55px;
  border-radius: 4px;
  ${({ error, theme }) =>
    error
      ? css`
          border: 1px solid ${theme.colors.red};
        `
      : css`
          border: 1px solid rgba(0, 0, 0, 0.36);
          &:focus-within {
            border: 1px solid ${theme.colors.blue};
            border-radius: 4px;
          }
        `};
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

const CustomInput = styled.input<{ error: boolean; hasPlaceholder: boolean }>`
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
    color: ${({ theme, error }) => theme.colors[error ? "red" : "blue"]};
  }
  &:not(:placeholder-shown) {
    &:not(:focus) {
      + label {
        ${getFocusedLabelStyles};
        color: ${({ theme, error }) => theme.colors[error ? "red" : "grey"]};
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

const SpinnerWrapper = styled.div`
  display: flex;
  margin: 0 2rem;
`;
