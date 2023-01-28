import { FunctionComponent, InputHTMLAttributes, ReactNode, KeyboardEvent } from "react";
import styled, { css } from "styled-components";
import { SwitchPositionType, SwitchSizeType } from "./Switch.types";
import { hiddenStyles, ThemeType } from "@/css";
import { useTheme } from "@/hooks";

type SwitchProps = {
  children: ReactNode;
  helpText?: ReactNode;
  size?: SwitchSizeType;
  position?: SwitchPositionType;
  color?: string;
  disabled?: boolean;
  onChange: () => void;
};

export const Switch: FunctionComponent<
  SwitchProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange">
> = ({
  children,
  helpText,
  size = "md",
  position = "right",
  checked,
  color,
  disabled = false,
  onChange,
  ...restProps
}) => {
  const { theme } = useTheme();

  const handleKeyPress = (event: KeyboardEvent) => {
    if (["Enter", " "].includes(event.key)) {
      onChange();
    }
  };

  return (
    <label>
      <HiddenInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-checked={checked}
        tabIndex={-1}
        onChange={onChange}
        {...restProps}
      />
      <Container disabled={disabled} hasHelpText={!!helpText}>
        <Wrapper position={position} tabIndex={disabled ? -1 : 0} onKeyDown={handleKeyPress}>
          <Pill
            checked={checked || false}
            size={size}
            color={color || theme.assets.switchChecked}
            disabled={disabled}
          >
            <Ball checked={checked || false} size={size} />
          </Pill>
        </Wrapper>
        <LabelContainer position={position}>
          <Label size={size}>{children}</Label>
          {helpText && <HelpText size={size}>{helpText}</HelpText>}
        </LabelContainer>
      </Container>
    </label>
  );
};

const HiddenInput = styled.input`
  ${hiddenStyles};
`;

const Container = styled.div<{ disabled: boolean; hasHelpText: boolean }>`
  display: flex;
  align-items: ${({ hasHelpText }) => (hasHelpText ? "flex-start" : "center")};
  gap: ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
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

const LabelContainer = styled.div<{ position: SwitchPositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;

const Label = styled.span<{ size: SwitchSizeType }>`
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
  font-size: ${({ size, theme }) => {
    const sizes: Record<SwitchSizeType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[size];
  }};
  margin-top: ${({ theme }) => theme.spacing[3.5]};
  color: ${({ theme }) => theme.assets.textSecondary};
`;
