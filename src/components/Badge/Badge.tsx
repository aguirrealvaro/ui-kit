import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { VariantType } from "@/types";

type BadeProps = {
  children: ReactNode;
  variant?: VariantType;
};

export const Badge: FunctionComponent<BadeProps> = ({ children, variant = "primary" }) => {
  return <Container variant={variant}>{children}</Container>;
};

const Container = styled.span<{ variant: VariantType }>`
  padding: 0.25em 0.4em;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ variant, theme }) => {
    const variantStyles: Record<VariantType, FlattenSimpleInterpolation> = {
      primary: css`
        background-color: ${theme.assets.badgePrimaryBg};
        color: ${theme.assets.badgePrimaryText};
      `,
      success: css`
        background-color: ${theme.assets.badgeSuccessBg};
        color: ${theme.assets.badgeSuccessText};
      `,
      danger: css`
        background-color: ${theme.assets.badgeDangerBg};
        color: ${theme.assets.badgeDangerText};
      `,
      warning: css`
        background-color: ${theme.assets.badgeWarningBg};
        color: ${theme.assets.badgeWarningText};
      `,
      neutral: css`
        background-color: ${theme.assets.badgeNeutralBg};
        color: ${theme.assets.badgeNeutralText};
      `,
    };
    return variantStyles[variant];
  }};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
`;
