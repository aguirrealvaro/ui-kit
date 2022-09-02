import { FunctionComponent, ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
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
      <InputContainer disabled={disabled || false} error={!!error}>
        <InnerContainer>
          <CustomInput id={inputId} {...inputProps} />
          <Label htmlFor={inputId}>{placeholder}</Label>
        </InnerContainer>
        {isLoading && (
          <SpinnerWrapper>
            <Spinner size="mini" />
          </SpinnerWrapper>
        )}
      </InputContainer>
      {(helpText || error) && <Bottom error={!!error}>{error || helpText}</Bottom>}
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
      background: #f3f3f3;
      border: 1px solid transparent;
      ${Label} {
        background: none;
      }
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
  top: 13px;
  font-size: 0.73rem;
  font-weight: 500;
`;

const CustomInput = styled.input<{ error: boolean }>`
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  position: absolute;
  left: 1rem;
  right: 1rem;
  height: 65%;
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

const Bottom = styled.div<{ error: boolean }>`
  font-size: 13px;
  margin: 0.5rem 1rem 0 1rem;
  color: ${({ error, theme }) => theme.colors[error ? "red" : "grey"]};
`;

const SpinnerWrapper = styled.div`
  display: flex;
  margin: 0 2rem;
`;
