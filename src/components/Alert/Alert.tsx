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
    neutral: { icon: InfoCircleFill, color: theme.colors.grey[13] },
  };

  return (
    <Container variant={variant} size={size} role="alert">
      <span>{children}</span>
      <div>
        <Icon
          icon={variantIcons[variant].icon}
          size={sizeIcons[size]}
          color={variantIcons[variant].color}
        />
      </div>
    </Container>
  );
};

const Container = styled.div<{ variant: AlertVariantType; size: AlertSizeType }>`
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  ${({ variant, theme }) => {
    const variantStyles: Record<AlertVariantType, FlattenSimpleInterpolation> = {
      default: css`
        color: ${theme.colors.blue[9]};
        background-color: ${theme.colors.blue[2]};
        border: 1px solid ${theme.colors.blue[3]};
      `,
      positive: css`
        color: ${theme.colors.green[9]};
        background-color: ${theme.colors.green[2]};
        border: 1px solid ${theme.colors.green[3]};
      `,
      negative: css`
        color: ${theme.colors.red[9]};
        background-color: ${theme.colors.red[2]};
        border: 1px solid ${theme.colors.red[3]};
      `,
      warning: css`
        color: ${theme.colors.yellow[9]};
        background-color: ${theme.colors.yellow[2]};
        border: 1px solid ${theme.colors.yellow[5]};
      `,
      neutral: css`
        color: ${theme.colors.grey[9]};
        background-color: ${theme.colors.grey[5]};
        border: 1px solid ${theme.colors.grey[6]};
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

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
