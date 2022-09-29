import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import { Checkbox as CheckboxUnchecked } from "@styled-icons/boxicons-regular/Checkbox";
import { CheckboxChecked } from "@styled-icons/boxicons-solid/CheckboxChecked";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { CheckboxPositionType, CheckboxSizeType } from "./Checkbox.types";
import { hiddenStyles } from "@/css";
import { useTheme } from "@/hooks";

type CheckboxProps = {
  children?: ReactNode;
  size?: CheckboxSizeType;
  position?: CheckboxPositionType;
  color?: string;
  disabled?: boolean;
};

export const Checkbox: FunctionComponent<
  CheckboxProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size">
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

  const sizes: Record<CheckboxSizeType, string> = {
    xs: theme.spacing[5],
    sm: theme.spacing[6],
    md: theme.spacing[7],
    lg: theme.spacing[8],
  };

  const iconSize = sizes[size];

  const icon = checked ? CheckboxChecked : CheckboxUnchecked;
  const iconColor = color || theme.assets.info;

  return (
    <label>
      <HiddenInput type="checkbox" checked={checked} {...restProps} disabled={disabled} />
      <Container disabled={disabled}>
        <Wrapper position={position}>
          <Icon
            icon={icon}
            color={disabled ? theme.assets["disabled"] : iconColor}
            size={iconSize}
          />
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
        color: ${theme.assets["disabled"]};
      `;
    }
  }}
`;

const Wrapper = styled.div<{ position: CheckboxPositionType }>`
  order: ${({ position }) => (position === "left" ? 1 : 2)};
`;

const Label = styled.div<{ position: CheckboxPositionType; size: CheckboxSizeType }>`
  order: ${({ position }) => (position === "left" ? 2 : 1)};
  font-size: ${({ size, theme }) => {
    const sizes: Record<CheckboxSizeType, string> = {
      xs: theme.typography.fontSizes.xs,
      sm: theme.typography.fontSizes.sm,
      md: theme.typography.fontSizes.md,
      lg: theme.typography.fontSizes.lg,
    };
    return sizes[size];
  }};
`;
