import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { SWICTH_SIZES } from "./Switch.constants";
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
  size = "md",
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
            color={color || theme.assets.brand}
            disabled={disabled}
          >
            <Ball checked={checked || false} size={switchSize} />
          </Pill>
        </Wrapper>
        {children && (
          <Label position={position} size={size}>
            {children}
          </Label>
        )}
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
        color: ${theme.assets["disabled"]};
      `;
    }
  }}
`;

const Wrapper = styled.div<{ position: SwitchPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
  line-height: 0;
`;

const Pill = styled.span<{ checked: boolean; size: number; color: string; disabled: boolean }>`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  width: ${({ size }) => `${size * 2}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: background-color ${({ theme }) => theme.transitions.normal}ms ease-in,
    box-shadow ${({ theme }) => theme.transitions.normal}ms ease-in;
  ${({ checked, color, theme }) => {
    if (checked) {
      return css`
        background-color: ${color};
        box-shadow: ${({ theme }) => theme.shadows.inset};
      `;
    } else {
      return css`
        background-color: ${theme.colors.grey[5]};
        box-shadow: ${({ theme }) => theme.shadows.inset};
      `;
    }
  }}
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        background-color: ${theme.assets["disabled"]};
        box-shadow: ${({ theme }) => theme.shadows.none};
      `;
    }
  }}
`;

const Ball = styled.span<{ checked: boolean; size: number }>`
  position: absolute;
  top: 0;
  left: ${({ checked, size }) => (checked ? `${size}px` : 0)};
  transform: scale(0.8);
  background-color: ${({ theme }) => theme.colors.grey[1]};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: left ${({ theme }) => theme.transitions.normal}ms ease-in;
`;

const Label = styled.div<{ position: SwitchPositionType; size: SwitchSizeType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
  font-size: ${({ size, theme }) => {
    const sizes: Record<SwitchSizeType, string> = {
      xs: theme.typography.fontSizes.xs,
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;
