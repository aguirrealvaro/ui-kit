import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { VariantType } from "@/types";

type BadeProps = {
  children: ReactNode;
  variant?: VariantType;
};

export const Badge: FunctionComponent<BadeProps> = ({ children, variant = "info" }) => {
  return <Container variant={variant}>{children}</Container>;
};

const Container = styled.span<{ variant: VariantType }>`
  padding: 0.25em 0.4em;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ variant, theme }) => {
    const variantStyles: Record<VariantType, FlattenSimpleInterpolation> = {
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
