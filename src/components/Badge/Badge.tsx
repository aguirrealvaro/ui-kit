import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { VariantType } from "@/types";

type BadeProps = {
  children: ReactNode;
  variant?: VariantType;
};

export const Badge: FunctionComponent<BadeProps> = ({ children, variant = "neutral" }) => {
  return <Container variant={variant}>{children}</Container>;
};

const Container = styled.span<{ variant: VariantType }>`
  padding: 0.2005em 0.4em;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ variant, theme }) => {
    const variantStyles: Record<VariantType, FlattenSimpleInterpolation> = {
      primary: css`
        background-color: ${theme.colors.blue[100]};
        color: ${theme.colors.blue[800]};
      `,
      success: css`
        background-color: ${theme.colors.green[100]};
        color: ${theme.colors.green[800]};
      `,
      danger: css`
        background-color: ${theme.colors.red[100]};
        color: ${theme.colors.red[800]};
      `,
      warning: css`
        background-color: ${theme.colors.yellow[100]};
        color: ${theme.colors.yellow[800]};
      `,
      neutral: css`
        background-color: ${theme.colors.grey[200]};
        color: ${theme.colors.grey[800]};
      `,
    };
    return variantStyles[variant];
  }};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
`;
