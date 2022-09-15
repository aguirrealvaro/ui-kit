import { FunctionComponent, InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { hiddenStyles } from "../App";
import { ANIMATION_TIME, SIZES } from "./Switch.constants";
import { SizeType } from "./Switch.types";

type SwitchProps = {
  switchSize?: SizeType;
};

export const Switch: FunctionComponent<
  SwitchProps & InputHTMLAttributes<HTMLInputElement>
> = ({ switchSize = "sm", checked, ...restProps }) => {
  const size = SIZES[switchSize];

  return (
    <label>
      <HiddenInput type="checkbox" checked={checked} {...restProps} />
      <Pill checked={checked || false} size={size}>
        <Ball checked={checked || false} size={size} />
      </Pill>
    </label>
  );
};

const HiddenInput = styled.input`
  ${hiddenStyles};
`;

const Pill = styled.span<{ checked: boolean; size: number }>`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  width: ${({ size }) => `${size * 2}px`};
  height: ${({ size }) => `${size}px`};
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

const Ball = styled.span<{ checked: boolean; size: number }>`
  position: absolute;
  top: 0;
  left: ${({ checked, size }) => (checked ? `${size}px` : 0)};
  transform: scale(0.8);
  //box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  background: #fff;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 100px;
  transition: left ${ANIMATION_TIME}ms ease;
`;
