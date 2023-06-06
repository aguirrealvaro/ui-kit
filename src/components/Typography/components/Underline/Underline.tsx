import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";
import { UnderlineVariantType } from "./Underline.types";

type UnderlineProps = {
  children: ReactNode;
  variant?: UnderlineVariantType;
} & StyledTypographyProps;

const Underline: FunctionComponent<UnderlineProps> = ({
  children,
  variant = "primary",
  ...styledProps
}) => {
  return (
    <StyledTypography {...styledProps}>
      <CustomUnderline $variant={variant}>{children}</CustomUnderline>
    </StyledTypography>
  );
};

export { Underline, type UnderlineProps };

const CustomUnderline = styled.u<{ $variant: UnderlineVariantType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-size: ${({ theme }) => theme.typography.fontSizes["md"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.tokens.textPrimary : theme.tokens.textSecondary};
`;
