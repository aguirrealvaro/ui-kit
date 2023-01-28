import { FunctionComponent, InputHTMLAttributes, ReactNode, KeyboardEvent } from "react";
import { CheckCircle } from "@styled-icons/material-rounded/CheckCircle";
import { RadioButtonUnchecked } from "@styled-icons/material-rounded/RadioButtonUnchecked";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { CheckboxPositionType, CheckboxSizeType } from "./Checkbox.types";
import { hiddenStyles } from "@/css";
import { useTheme } from "@/hooks";

type CheckboxProps = {
  children: ReactNode;
  helpText?: ReactNode;
  size?: CheckboxSizeType;
  position?: CheckboxPositionType;
  color?: string;
  disabled?: boolean;
  onChange: () => void;
};

export const Checkbox: FunctionComponent<
  CheckboxProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange">
> = ({
  children,
  helpText,
  size = "md",
  position = "left",
  checked,
  color,
  disabled = false,
  onChange,
  ...restProps
}) => {
  const { theme } = useTheme();

  const sizes: Record<CheckboxSizeType, string> = {
    sm: theme.spacing[6],
    md: theme.spacing[7],
    lg: theme.spacing[8],
  };

  const iconSize = sizes[size];

  const icon = checked ? CheckCircle : RadioButtonUnchecked;
  const iconColor = color || theme.assets.primary;

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
        aria-checked={checked}
        disabled={disabled}
        tabIndex={-1}
        onChange={onChange}
        {...restProps}
      />
      <Container disabled={disabled} hasHelpText={!!helpText}>
        <IconWrapper
          position={position}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyPress}
        >
          <Icon
            icon={icon}
            color={disabled ? theme.assets.disabledBg : iconColor}
            size={iconSize}
          />
        </IconWrapper>
        <ChildrenContainer position={position}>
          <ChildrenContent size={size}>{children}</ChildrenContent>
          {helpText && <HelpText size={size}>{helpText}</HelpText>}
        </ChildrenContainer>
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
  cursor: pointer;
  gap: ${({ theme }) => theme.spacing[4]};
  ${({ disabled, theme }) => {
    if (disabled) {
      return css`
        cursor: not-allowed;
        color: ${theme.assets.disabledBg};
      `;
    }
  }}
`;

const IconWrapper = styled.div<{ position: CheckboxPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
`;

const ChildrenContainer = styled.div<{ position: CheckboxPositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;

const ChildrenContent = styled.span<{ size: CheckboxSizeType }>`
  display: block;
  font-size: ${({ size, theme }) => {
    const sizes: Record<CheckboxSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;

const HelpText = styled.span<{ size: CheckboxSizeType }>`
  display: block;
  font-size: ${({ size, theme }) => {
    const sizes: Record<CheckboxSizeType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[size];
  }};
  margin-top: ${({ theme }) => theme.spacing[3.5]};
  color: ${({ theme }) => theme.assets.textSecondary};
`;
