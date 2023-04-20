import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import { CheckCircle } from "@styled-icons/material-rounded/CheckCircle";
import { RadioButtonUnchecked } from "@styled-icons/material-rounded/RadioButtonUnchecked";
import styled from "styled-components";
import { Icon } from "../Icon";
import { CheckboxNewSizeType } from "./CheckboxNew.types";
import { useTheme } from "@/hooks";

type CheckboxNewProps = {
  children: ReactNode;
  checkboxId: string;
  checked: boolean;
  onChange: () => void;
  color?: string;
  size?: CheckboxNewSizeType;
  helpText?: ReactNode;
};

// TO DO:
// disabled
// helpText
// position
// disable enter

export const CheckboxNew: FunctionComponent<
  CheckboxNewProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "onChange">
> = ({
  children,
  checked,
  onChange,
  disabled,
  color,
  checkboxId,
  size = "md",
  helpText,
  ...restProps
}) => {
  const { theme } = useTheme();

  const sizes: Record<CheckboxNewSizeType, string> = {
    sm: theme.spacing[6],
    md: theme.spacing[7],
    lg: theme.spacing[8],
  };

  const iconSize = sizes[size];

  const icon = checked ? CheckCircle : RadioButtonUnchecked;
  const iconColor = color || theme.assets.primary;

  const labelId = `${checkboxId}-label`;

  return (
    <Container>
      <button
        type="button"
        role="checkbox"
        onClick={onChange}
        aria-checked={checked}
        id={checkboxId}
        aria-labelledby={labelId}
        {...restProps}
      >
        <Icon
          icon={icon}
          color={disabled ? theme.assets.disabledBg : iconColor}
          size={iconSize}
        />
      </button>
      <label id={labelId} htmlFor={checkboxId}>
        <Children size={size}>{children}</Children>
        <HelpText size={size}>{helpText}</HelpText>
      </label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
`;

const Children = styled.span<{ size: CheckboxNewSizeType }>`
  display: block;
  font-size: ${({ size, theme }) => {
    const sizes: Record<CheckboxNewSizeType, string> = {
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;

const HelpText = styled.span<{ size: CheckboxNewSizeType }>`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[3.5]};
  color: ${({ theme }) => theme.assets.textSecondary};
  font-size: ${({ size, theme }) => {
    const sizes: Record<CheckboxNewSizeType, string> = {
      sm: theme.typography.fontSizes.xs,
      md: theme.typography.fontSizes.sm,
      lg: theme.typography.fontSizes.md,
    };
    return sizes[size];
  }};
`;
