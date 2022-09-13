import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

type VariantType = "default" | "positive" | "negative" | "warning" | "neutral";

type AlertProps = {
  children: ReactNode;
  variant?: VariantType;
};

export const Alert: FunctionComponent<AlertProps> = ({ children, variant = "default" }) => {
  return <Container variant={variant}>{children}</Container>;
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

const Container = styled.div<{ variant: VariantType }>`
  padding: 1rem;
  border-radius: 8px;
  ${({ variant }) => variantStyles[variant]};
`;
