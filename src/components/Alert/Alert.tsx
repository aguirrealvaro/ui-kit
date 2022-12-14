import { FunctionComponent, ReactNode } from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";
import { Alert as AlertIcon } from "@styled-icons/remix-fill/Alert";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { AlertSizeType } from "./Alert.types";
import { Icon } from "@/components";
import { useTheme } from "@/hooks";
import { VariantType } from "@/types";

type AlertProps = {
  children: ReactNode;
  variant?: VariantType;
  size?: AlertSizeType;
  showIcon?: boolean;
};

export const Alert: FunctionComponent<AlertProps> = ({
  children,
  variant = "primary",
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

  const variantIcons: Record<VariantType, { icon: StyledIcon; color: string }> = {
    primary: { icon: InfoCircleFill, color: theme.assets.primary },
    success: { icon: CheckCircleFill, color: theme.assets.success },
    warning: { icon: AlertIcon, color: theme.assets.warning },
    danger: { icon: CloseCircle, color: theme.assets.danger },
    neutral: { icon: InfoCircleFill, color: theme.assets.neutral },
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

const Container = styled.div<{ variant: VariantType; size: AlertSizeType }>`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ variant, theme }) => {
    const variantStyles: Record<VariantType, FlattenSimpleInterpolation> = {
      primary: css`
        background-color: ${theme.assets.alertPrimaryBg};
        color: ${theme.assets.alertPrimaryText};
      `,
      success: css`
        background-color: ${theme.assets.alertSuccessBg};
        color: ${theme.assets.alertSuccessText};
      `,
      danger: css`
        background-color: ${theme.assets.alertDangerBg};
        color: ${theme.assets.alertDangerText};
      `,
      warning: css`
        background-color: ${theme.assets.alertWarningBg};
        color: ${theme.assets.alertWarningText};
      `,
      neutral: css`
        background-color: ${theme.assets.alertNeutralBg};
        color: ${theme.assets.alertNeutralText};
      `,
    };
    return variantStyles[variant];
  }};
  ${({ size, theme }) => {
    const sizeStyles: Record<AlertSizeType, FlattenSimpleInterpolation> = {
      xs: css`
        padding: ${`${theme.spacing[2]} ${theme.spacing[3]}`};
        font-size: ${theme.typography.fontSizes.xs};
        gap: ${theme.spacing[2.5]};
      `,
      sm: css`
        padding: ${`${theme.spacing[3]} ${theme.spacing[4]}`};
        font-size: ${theme.typography.fontSizes.sm};
        gap: ${theme.spacing[3.0]};
      `,
      md: css`
        padding: ${`${theme.spacing[4]} ${theme.spacing[5]}`};
        font-size: ${theme.typography.fontSizes.md};
        gap: ${theme.spacing[3.5]};
      `,
      lg: css`
        padding: ${`${theme.spacing[5]} ${theme.spacing[6]}`};
        font-size: ${theme.typography.fontSizes.lg};
        gap: ${theme.spacing[4]};
      `,
    };
    return sizeStyles[size];
  }};
`;
