import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import { CheckCircle } from "@styled-icons/material-rounded/CheckCircle";
import { RadioButtonUnchecked } from "@styled-icons/material-rounded/RadioButtonUnchecked";
import styled from "styled-components";
import { Icon } from "../Icon";
import { CheckboxPositionType, CheckboxSizeType } from "./Checkbox.types";
import { HelpText } from "@/css";
import { useTheme } from "@/hooks";

type CheckboxProps = {
  children: ReactNode;
  id: string;
  checked: boolean;
  onChange: () => void;
  color?: string;
  size?: CheckboxSizeType;
  helpText?: ReactNode;
  position?: CheckboxPositionType;
};

export const Checkbox: FunctionComponent<
  CheckboxProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "onChange">
> = ({
  children,
  id,
  checked,
  onChange,
  disabled = false,
  color,
  size = "md",
  helpText,
  position = "left",
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

  const labelId = `${id}-label`;

  return (
    <Container position={position}>
      <CheckboxButton
        type="button"
        role="checkbox"
        onClick={onChange}
        aria-checked={checked}
        id={id}
        aria-labelledby={labelId}
        disabled={disabled}
        position={position}
        {...restProps}
      >
        <Icon
          icon={icon}
          color={disabled ? theme.assets.disabledBg : iconColor}
          size={iconSize}
        />
      </CheckboxButton>
      <LabelContainer id={labelId} htmlFor={id} position={position}>
        <Children size={size}>{children}</Children>
        {helpText && <HelpText size={size}>{helpText}</HelpText>}
      </LabelContainer>
    </Container>
  );
};

const Container = styled.div<{ position: CheckboxPositionType }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  justify-content: ${({ position }) => (position === "left" ? "flex-start" : "space-between")};
`;

const CheckboxButton = styled.button<{ position: CheckboxPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
  &:disabled {
    cursor: not-allowed;
  }
`;

const LabelContainer = styled.label<{ position: CheckboxPositionType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
`;

const Children = styled.span<{ size: CheckboxSizeType }>`
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
