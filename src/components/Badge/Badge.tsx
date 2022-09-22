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
        color: ${theme.palette.grey[1]};
        background-color: ${theme.palette.blue.base};
      `,
      positive: css`
        color: ${theme.palette.grey[1]};
        background-color: ${theme.palette.green.base};
      `,
      negative: css`
        color: ${theme.palette.grey[1]};
        background-color: ${theme.palette.red.base};
      `,
      warning: css`
        color: ${theme.palette.grey[13]};
        background-color: ${theme.palette.yellow.base};
      `,
      neutral: css`
        color: ${theme.palette.grey[1]};
        background-color: ${theme.palette.grey[13]};
      `,
    };
    return variantStyles[variant];
  }};
  font-size: 12px;
`;
