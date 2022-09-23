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
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ variant, theme }) => {
    const variantStyles: Record<BadgeVariantType, FlattenSimpleInterpolation> = {
      default: css`
        color: ${theme.colors.grey[1]};
        background-color: ${theme.colors.brand};
      `,
      positive: css`
        color: ${theme.colors.grey[1]};
        background-color: ${theme.colors.green.base};
      `,
      negative: css`
        color: ${theme.colors.grey[1]};
        background-color: ${theme.colors.red.base};
      `,
      warning: css`
        color: ${theme.colors.grey[13]};
        background-color: ${theme.colors.yellow.base};
      `,
      neutral: css`
        color: ${theme.colors.grey[1]};
        background-color: ${theme.colors.grey[13]};
      `,
    };
    return variantStyles[variant];
  }};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
`;
