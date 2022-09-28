import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { BadgeVariantType } from "./Badge.types";

type BadeProps = {
  children: ReactNode;
  variant?: BadgeVariantType;
};

export const Badge: FunctionComponent<BadeProps> = ({ children, variant = "info" }) => {
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
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
`;
