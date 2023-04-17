import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";
import { BoldVariantType } from "./Bold.types";

type BoldProps = {
  children: ReactNode;
  variant: BoldVariantType;
} & StyledTypographyProps;

export const Bold: FunctionComponent<BoldProps> = ({
  children,
  variant = "primary",
  ...styledProps
}) => {
  return (
    <StyledTypography {...styledProps}>
      <Strong variant={variant}>{children}</Strong>
    </StyledTypography>
  );
};

const Strong = styled.strong<{ variant: BoldVariantType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-size: ${({ theme }) => theme.typography.fontSizes["md"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.assets.textPrimary : theme.assets.textSecondary};
`;
