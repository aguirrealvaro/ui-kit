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
  showIcon?: boolean;
};

export const Alert: FunctionComponent<AlertProps> = ({
  children,
  variant = "info",
  size = "md",
  showIcon = true,
}) => {
  const { theme } = useTheme();

  const sizeIcons: Record<AlertSizeType, number> = {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
  };

  const variantIcons: Record<AlertVariantType, { icon: StyledIcon; color: string }> = {
    info: { icon: InfoCircleFill, color: theme.assets.info },
    success: { icon: CheckCircleFill, color: theme.assets.success },
    warning: { icon: AlertIcon, color: theme.assets.warning },
    danger: { icon: CloseCircle, color: theme.assets.danger },
    neutral: { icon: InfoCircleFill, color: theme.colors.grey[6] },
  };

  return (
    <Container variant={variant} size={size} role="alert">
      {showIcon && (
        <Icon
          icon={variantIcons[variant].icon}
          size={sizeIcons[size]}
          color={variantIcons[variant].color}
        />
      )}
      <span>{children}</span>
    </Container>
  );
};

const Container = styled.div<{ variant: AlertVariantType; size: AlertSizeType }>`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ variant, theme }) => {
    const variantStyles: Record<AlertVariantType, FlattenSimpleInterpolation> = {
      info: css`
        background-color: ${theme.colors.blue[2]};
        color: ${theme.colors.blue[8]};
      `,
      success: css`
        background-color: ${theme.colors.green[2]};
        color: ${theme.colors.green[8]};
      `,
      danger: css`
        background-color: ${theme.colors.red[2]};
        color: ${theme.colors.red[8]};
      `,
      warning: css`
        background-color: ${theme.colors.yellow[2]};
        color: ${theme.colors.yellow[8]};
      `,
      neutral: css`
        background-color: ${theme.colors.grey[3]};
        color: ${theme.colors.grey[8]};
      `,
    };
    return variantStyles[variant];
  }};
  ${({ size, theme }) => {
    const sizeStyles: Record<AlertSizeType, FlattenSimpleInterpolation> = {
      xs: css`
        padding: 8px 12px;
        font-size: ${theme.typography.fontSizes.xs};
        gap: 10px;
      `,
      sm: css`
        padding: 12px 16px;
        font-size: ${theme.typography.fontSizes.sm};
        gap: 12px;
      `,
      md: css`
        padding: 16px 20px;
        font-size: ${theme.typography.fontSizes.md};
        gap: 14px;
      `,
      lg: css`
        padding: 20px 24px;
        font-size: ${theme.typography.fontSizes.lg};
        gap: 16px;
      `,
    };
    return sizeStyles[size];
  }};
`;
