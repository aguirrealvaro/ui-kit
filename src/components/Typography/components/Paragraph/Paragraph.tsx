import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";
import { ParagraphVariantType } from "./Paragraph.types";

type ParagraphProps = {
  children: ReactNode;
  variant?: ParagraphVariantType;
} & StyledTypographyProps;

const Paragraph: FunctionComponent<ParagraphProps> = ({
  children,
  variant = "primary",
  ...styledProps
}) => {
  return (
    <StyledTypography {...styledProps}>
      <Heading $variant={variant}>{children}</Heading>
    </StyledTypography>
  );
};

export { Paragraph, type ParagraphProps };

const Heading = styled.p<{ $variant: ParagraphVariantType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-size: ${({ theme }) => theme.typography.fontSizes["md"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.tokens.textPrimary : theme.tokens.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  &:last-child {
    margin-bottom: 0;
  }
`;
