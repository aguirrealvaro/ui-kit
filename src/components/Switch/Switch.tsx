import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { hiddenStyles, theme } from "../App";
import { ANIMATION_TIME, SIZES } from "./Switch.constants";
import { SwitchPositionType, SwitchSizeType } from "./Switch.types";

type SwitchProps = {
  children?: ReactNode;
  switchSize?: SwitchSizeType;
  position?: SwitchPositionType;
  color?: string;
  disabled?: boolean;
};

export const Switch: FunctionComponent<
  SwitchProps & InputHTMLAttributes<HTMLInputElement>
> = ({
  children,
  switchSize = "sm",
  position = "right",
  checked,
  color = theme.colors.blue,
  disabled = false,
  ...restProps
}) => {
  const size = SIZES[switchSize];

  return (
    <label>
      <HiddenInput type="checkbox" checked={checked} disabled={disabled} {...restProps} />
      <Container disabled={disabled}>
        <Wrapper position={position}>
          <Pill checked={checked || false} size={size} color={color} disabled={disabled}>
            <Ball checked={checked || false} size={size} />
          </Pill>
        </Wrapper>
        {children && <Label position={position}>{children}</Label>}
      </Container>
    </label>
  );
};

const HiddenInput = styled.input`
  ${hiddenStyles};
`;

const Container = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${({ disabled }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        color: #cecece;
      `;
    }
  }}
`;

const Wrapper = styled.div<{ position: SwitchPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
`;

const Pill = styled.span<{ checked: boolean; size: number; color: string; disabled: boolean }>`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  width: ${({ size }) => `${size * 2}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 100px;
  transition: background-color ${ANIMATION_TIME}ms ease, box-shadow ${ANIMATION_TIME}ms ease;
  ${({ checked, color }) => {
    if (checked) {
      return css`
        background-color: ${color};
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
      `;
    } else {
      return css`
        background-color: #c6c6c6;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      `;
    }
  }}
  ${({ disabled }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        opacity: 0.5;
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
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 100px;
  transition: left ${ANIMATION_TIME}ms ease;
`;

const Label = styled.div<{ position: SwitchPositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;
