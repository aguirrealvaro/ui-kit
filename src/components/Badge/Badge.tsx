import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { BadgeVariantType } from "./Badge.types";

type BadeProps = {
  children: ReactNode;
  variant?: BadgeVariantType;
};

export const Badge: FunctionComponent<BadeProps> = ({ children, variant = "default" }) => {
  return (
    <Container variant={variant}>
      <span>{children}</span>
    </Container>
  );
};

const Container = styled.div<{ variant: BadgeVariantType }>`
  padding: 0.25em 0.4em;
  border-radius: 4px;
  ${({ variant, theme }) => {
    const variantStyles: Record<BadgeVariantType, FlattenSimpleInterpolation> = {
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
    return variantStyles[variant];
  }};
  font-size: 12px;
`;
