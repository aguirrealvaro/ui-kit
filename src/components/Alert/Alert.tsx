import { FunctionComponent, ReactNode } from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";
import { Alert as AlertIcon } from "@styled-icons/remix-fill/Alert";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { AlertSizeType, AlertVariantType } from "./Alert.types";
import { Icon } from "@/components";
import { useTheme } from "@/hooks";

type AlertProps = {
  children: ReactNode;
  variant?: AlertVariantType;
  size?: AlertSizeType;
};

export const Alert: FunctionComponent<AlertProps> = ({
  children,
  variant = "default",
  size = "sm",
}) => {
  const { theme } = useTheme();

  const sizeIcons: Record<AlertSizeType, number> = {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
  };

  const variantIcons: Record<AlertVariantType, { icon: StyledIcon; color: string }> = {
    default: { icon: InfoCircleFill, color: theme.colors.brand },
    positive: { icon: CheckCircleFill, color: theme.colors.green.base },
    warning: { icon: AlertIcon, color: theme.colors.yellow.base },
    negative: { icon: CloseCircle, color: theme.colors.red.base },
    neutral: { icon: InfoCircleFill, color: theme.colors.grey[15] },
  };

  return (
    <Container variant={variant} size={size} role="alert">
      <Icon
        icon={variantIcons[variant].icon}
        size={sizeIcons[size]}
        color={variantIcons[variant].color}
      />
      <span>{children}</span>
    </Container>
  );
};

const Container = styled.div<{ variant: AlertVariantType; size: AlertSizeType }>`
  display: flex;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  background-color: ${({ theme }) => theme.colors.grey[3]};
  color: ${({ theme }) => theme.colors.grey[12]};
  ${({ variant, theme }) => {
    const variantStyles: Record<AlertVariantType, FlattenSimpleInterpolation> = {
      default: css`
        border-color: ${theme.colors.blue.base};
      `,
      positive: css`
        border-color: ${theme.colors.green.base};
      `,
      negative: css`
        border-color: ${theme.colors.red.base};
      `,
      warning: css`
        border-color: ${theme.colors.yellow.base};
      `,
      neutral: css`
        border-color: ${theme.colors.grey.base};
      `,
    };
    return variantStyles[variant];
  }};
  ${({ size, theme }) => {
    const sizeStyles: Record<AlertSizeType, FlattenSimpleInterpolation> = {
      xs: css`
        padding: 8px 12px;
        font-size: ${theme.typography.fontSizes.xs};
      `,
      sm: css`
        padding: 12px 16px;
        font-size: ${theme.typography.fontSizes.sm};
      `,
      md: css`
        padding: 16px 20px;
        font-size: ${theme.typography.fontSizes.md};
      `,
      lg: css`
        padding: 20px 24px;
        font-size: ${theme.typography.fontSizes.lg};
      `,
    };
    return sizeStyles[size];
  }};
`;
