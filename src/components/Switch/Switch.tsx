import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";
import { SwitchPositionType, SwitchSizeType } from "./Switch.types";
import { ThemeType } from "@/css";
import { useTheme } from "@/hooks";

type SwitchProps = {
  children: ReactNode;
  switchId: string;
  checked: boolean;
  onChange: () => void;
  color?: string;
  size?: SwitchSizeType;
  helpText?: ReactNode;
  position?: SwitchPositionType;
};

export const Switch: FunctionComponent<
  SwitchProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "onChange">
> = ({
  children,
  checked,
  onChange,
  disabled = false,
  color,
  switchId,
  size = "md",
  helpText,
  position = "left",
  ...restProps
}) => {
  const { theme } = useTheme();

  const labelId = `${switchId}-label`;

  return (
    <Container position={position}>
      <SwitchButton
        type="button"
        role="switch"
        onClick={onChange}
        aria-checked={checked}
        id={switchId}
        aria-labelledby={labelId}
        disabled={disabled}
        position={position}
        {...restProps}
      >
        <Wrapper position={position}>
          <Pill
            checked={checked || false}
            size={size}
            color={color || theme.assets.switchChecked}
            disabled={disabled}
          >
            <Ball checked={checked || false} size={size} />
          </Pill>
        </Wrapper>
      </SwitchButton>
      <LabelContainer id={labelId} htmlFor={switchId} position={position}>
        <Children size={size}>{children}</Children>
        {helpText && <HelpText size={size}>{helpText}</HelpText>}
      </LabelContainer>
    </Container>
  );
};

const Container = styled.div<{ position: SwitchPositionType }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  justify-content: ${({ position }) => (position === "left" ? "flex-start" : "space-between")};
`;

const SwitchButton = styled.button<{ position: SwitchPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
  &:disabled {
    cursor: not-allowed;
  }
`;

const Wrapper = styled.div<{ position: SwitchPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
  line-height: 0;
`;

const getSizes = (theme: ThemeType) => {
  const sizes: Record<SwitchSizeType, string> = {
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
        background-color: ${theme.assets.switchUnchecked};
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
  background-color: ${({ theme }) => theme.colors.white};
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

const LabelContainer = styled.label<{ position: SwitchPositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;

const Children = styled.span<{ size: SwitchSizeType }>`
  display: block;
  font-size: ${({ size, theme }) => {
    const sizes: Record<SwitchSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;

const HelpText = styled.span<{ size: SwitchSizeType }>`
  display: block;
  margin-top: ${({ size, theme }) => {
    const sizes: Record<SwitchSizeType, string> = {
      sm: theme.spacing[1],
      md: theme.spacing[2],
      lg: theme.spacing[3],
    };
    return sizes[size];
  }};
  color: ${({ theme }) => theme.assets.textSecondary};
  font-size: ${({ size, theme }) => {
    const sizes: Record<SwitchSizeType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[size];
  }};
`;
