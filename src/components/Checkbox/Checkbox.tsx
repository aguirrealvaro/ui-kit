import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import { Check } from "lucide-react";
import styled from "styled-components";
import { LucideIcon } from "../LucideIcon";
import { CheckboxPositionType, CheckboxSizeType } from "./Checkbox.types";
import { HelpText, theme } from "@/css";

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
  const sizes: Record<CheckboxSizeType, string> = {
    sm: theme.spacing[3.5],
    md: theme.spacing[4],
    lg: theme.spacing[5],
  };

  const iconSize = sizes[size];
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
        checked={checked}
        iconSize={iconSize}
        {...restProps}
      >
        {checked && <LucideIcon icon={Check} color={theme.colors.white} size={14} />}
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

const CheckboxButton = styled.button<{
  position: CheckboxPositionType;
  checked: boolean;
  iconSize: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ iconSize }) => iconSize};
  height: ${({ iconSize }) => iconSize};
  border: 1px solid ${({ theme }) => theme.assets.border};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  background-color: ${({ theme, checked }) => checked && theme.assets.primary};
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
