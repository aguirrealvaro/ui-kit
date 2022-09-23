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

  const variantIcons: Record<AlertVariantType, { icon: StyledIcon; color: string }> = {
    default: { icon: InfoCircleFill, color: theme.colors.blue.base },
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
          size={18}
          color={variantIcons[variant].color}
        />
      </div>
    </Container>
  );
};

const variantStyles: Record<AlertVariantType, FlattenSimpleInterpolation> = {
  default: css`
    color: #004085;
    background-color: #cce5ff;
    border: 1px solid #b8daff;
  `,
  positive: css`
    color: #155724;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
  `,
  negative: css`
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
  `,
  warning: css`
    color: #856404;
    background-color: #fff3cd;
    border: 1px solid #ffeeba;
  `,
  neutral: css`
    color: #1b1e21;
    background-color: #d6d8d9;
    border: 1px solid #c6c8ca;
  `,
};

const sizeStyles: Record<AlertSizeType, FlattenSimpleInterpolation> = {
  xs: css`
    padding: 8px 12px;
    font-size: 12px;
  `,
  sm: css`
    padding: 12px 16px;
    font-size: 14px;
  `,
  md: css`
    padding: 16px 20px;
    font-size: 16px;
  `,
  lg: css`
    padding: 20px 24px;
    font-size: 18px;
  `,
};

const Container = styled.div<{ variant: AlertVariantType; size: AlertSizeType }>`
  border-radius: 8px;
  ${({ variant }) => variantStyles[variant]};
  ${({ size }) => sizeStyles[size]};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
