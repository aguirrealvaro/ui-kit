import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { ANIMATION_TIME, SWICTH_SIZES } from "./Switch.constants";
import { SwitchPositionType, SwitchSizeType } from "./Switch.types";
import { hiddenStyles } from "@/css";
import { useTheme } from "@/hooks";

type SwitchProps = {
  children?: ReactNode;
  size?: SwitchSizeType;
  position?: SwitchPositionType;
  color?: string;
  disabled?: boolean;
};

export const Switch: FunctionComponent<
  SwitchProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size">
> = ({
  children,
  size = "sm",
  position = "right",
  checked,
  color,
  disabled = false,
  ...restProps
}) => {
  const { theme } = useTheme();
  const switchSize = SWICTH_SIZES[size];

  return (
    <label>
      <HiddenInput type="checkbox" checked={checked} disabled={disabled} {...restProps} />
      <Container disabled={disabled}>
        <Wrapper position={position}>
          <Pill
            checked={checked || false}
            size={switchSize}
            color={color || theme.colors.blue.base}
            disabled={disabled}
          >
            <Ball checked={checked || false} size={switchSize} />
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
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        color: ${theme.colors.grey[5]};
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
  ${({ checked, color, theme }) => {
    if (checked) {
      return css`
        background-color: ${color};
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
      `;
    } else {
      return css`
        background-color: ${theme.colors.grey[6]};
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
  background-color: ${({ theme }) => theme.colors.grey[1]};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 100px;
  transition: left ${ANIMATION_TIME}ms ease;
`;

const Label = styled.div<{ position: SwitchPositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;
