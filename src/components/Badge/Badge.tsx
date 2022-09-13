import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { theme } from "../App";

type VariantType = "default" | "positive" | "negative" | "warning" | "neutral";

type BadeProps = {
  children: ReactNode;
  variant?: VariantType;
};

export const Badge: FunctionComponent<BadeProps> = ({ children, variant = "default" }) => {
  return (
    <Container variant={variant}>
      <span>{children}</span>
    </Container>
  );
};

const variantStyles: Record<VariantType, FlattenSimpleInterpolation> = {
  default: css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};
  `,
  positive: css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};
  `,
  negative: css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.red};
  `,
  warning: css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.yellow};
  `,
  neutral: css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  `,
};

const Container = styled.div<{ variant: VariantType }>`
  padding: 0.25em 0.4em;
  border-radius: 4px;
  ${({ variant }) => variantStyles[variant]};
  font-size: 12px;
`;
