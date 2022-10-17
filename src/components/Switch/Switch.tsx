import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import { SwitchPositionType, SwitchSizeType } from "./Switch.types";
import { hiddenStyles, ThemeType } from "@/css";
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

  return (
    <label>
      <HiddenInput type="checkbox" checked={checked} disabled={disabled} {...restProps} />
      <Container disabled={disabled}>
        <Wrapper position={position}>
          <Pill
            checked={checked || false}
            size={size}
            color={color || theme.assets.primary}
            disabled={disabled}
          >
            <Ball checked={checked || false} size={size} />
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
  gap: ${({ theme }) => theme.spacing[2]};
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        color: ${theme.assets.disabledBg};
      `;
    }
  }}
`;

const Wrapper = styled.div<{ position: SwitchPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
  line-height: 0;
`;

const getSizes = (theme: ThemeType) => {
  const sizes: Record<SwitchSizeType, string> = {
    xs: theme.spacing[4],
    sm: theme.spacing[5],
    md: theme.spacing[6],
    lg: theme.spacing[7],
  };
  return sizes;
};

const Pill = styled.span<{
  checked: boolean;
  size: SwitchSizeType;
  color: string;
  disabled: boolean;
}>`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  ${({ size, theme }) => {
    const pillSize = getSizes(theme)[size];

    return css`
      width: ${`calc(${pillSize} * 2)`};
      height: ${pillSize};
    `;
  }}
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: background-color ${({ theme }) => theme.transitions.durations.normal}ms
      ${({ theme }) => theme.transitions.timings.out},
    box-shadow ${({ theme }) => theme.transitions.durations.normal}ms
      ${({ theme }) => theme.transitions.timings.out};
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
        background-color: ${theme.assets.disabledBg};
        box-shadow: ${({ theme }) => theme.shadows.none};
      `;
    }
  }}
`;

const Ball = styled.span<{ checked: boolean; size: SwitchSizeType }>`
  position: absolute;
  top: 0;
  left: ${({ checked, size, theme }) => {
    const translate = getSizes(theme)[size];
    return checked ? `${translate}` : 0;
  }};
  transform: scale(0.8);
  background-color: ${({ theme }) => theme.colors.grey[1]};
  ${({ size, theme }) => {
    const pillSize = getSizes(theme)[size];
    return css`
      width: ${pillSize};
      height: ${pillSize};
    `;
  }};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: left ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.in};
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
