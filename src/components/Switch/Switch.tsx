import { FunctionComponent, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

const ANIMATION_TIME = 200;

export const Switch: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = ({
  checked,
  ...restProps
}) => {
  return (
    <label>
      <HiddenInput type="checkbox" checked={checked} {...restProps} />
      <Pill checked={checked || false} />
    </label>
  );
};

const HiddenInput = styled.input``;

const Pill = styled.span<{ checked: boolean }>`
  display: inline-flex;
  cursor: pointer;
  padding: 2px;
  width: 50px;
  height: 25px;
  border-radius: 100px;
  transition: background-color ${ANIMATION_TIME}ms ease, box-shadow ${ANIMATION_TIME}ms ease;
  ${({ checked }) => {
    if (checked) {
      return css`
        background-color: #0072ff;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
      `;
    } else {
      return css`
        background-color: #c6c6c6;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      `;
    }
  }}
`;
