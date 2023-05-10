import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";
import { ItalicVariantType } from "./Italic.types";

type ItalicProps = {
  children: ReactNode;
  variant?: ItalicVariantType;
} & StyledTypographyProps;

export const Italic: FunctionComponent<ItalicProps> = ({
  children,
  variant = "primary",
  ...styledProps
}) => {
  return (
    <StyledTypography {...styledProps}>
      <CustomItalic variant={variant}>{children}</CustomItalic>
    </StyledTypography>
  );
};

const CustomItalic = styled.i<{ variant: ItalicVariantType }>`
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-size: ${({ theme }) => theme.typography.fontSizes["md"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.vars.textPrimary : theme.vars.textSecondary};
`;
