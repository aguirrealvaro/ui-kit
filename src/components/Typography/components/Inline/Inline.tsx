import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";
import { InlineVariantType } from "./Inline.types";

type InlineProps = {
  children: ReactNode;
  variant?: InlineVariantType;
} & StyledTypographyProps;

const Inline: FunctionComponent<InlineProps> = ({
  children,
  variant = "primary",
  ...styledProps
}) => {
  return (
    <StyledTypography {...styledProps}>
      <Span $variant={variant}>{children}</Span>
    </StyledTypography>
  );
};

const Span = styled.span<{ $variant: InlineVariantType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-size: ${({ theme }) => theme.typography.fontSizes["md"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.vars.textPrimary : theme.vars.textSecondary};
`;

export { Inline, type InlineProps };
