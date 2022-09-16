import { FunctionComponent, ReactNode } from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";
import { Alert as AlertIcon } from "@styled-icons/remix-fill/Alert";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { SizeType, VariantType } from "./Alert.types";
import { Icon } from "@/components";
import { theme } from "@/components/App";

type AlertProps = {
  children: ReactNode;
  variant?: VariantType;
  size?: SizeType;
};

export const Alert: FunctionComponent<AlertProps> = ({
  children,
  variant = "default",
  size = "sm",
}) => {
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

const variantIcons: Record<VariantType, { icon: StyledIcon; color: string }> = {
  default: { icon: InfoCircleFill, color: theme.colors.blue },
  positive: { icon: CheckCircleFill, color: theme.colors.green },
  warning: { icon: AlertIcon, color: theme.colors.yellow },
  negative: { icon: CloseCircle, color: theme.colors.red },
  neutral: { icon: InfoCircleFill, color: theme.colors.black },
};

const variantStyles: Record<VariantType, FlattenSimpleInterpolation> = {
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

const sizeStyles: Record<SizeType, FlattenSimpleInterpolation> = {
  xs: css`
    padding: 8px;
    font-size: 12px;
  `,
  sm: css`
    padding: 12px;
    font-size: 14px;
  `,
  md: css`
    padding: 16px;
    font-size: 16px;
  `,
  lg: css`
    padding: 20px;
    font-size: 18px;
  `,
};

const Container = styled.div<{ variant: VariantType; size: SizeType }>`
  border-radius: 8px;
  ${({ variant }) => variantStyles[variant]};
  ${({ size }) => sizeStyles[size]};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
