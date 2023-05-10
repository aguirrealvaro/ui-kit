import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";

type H1Props = {
  children: ReactNode;
} & StyledTypographyProps;

export const H1: FunctionComponent<H1Props> = ({ children, ...styledProps }) => {
  return (
    <StyledTypography {...styledProps}>
      <Heading>{children}</Heading>
    </StyledTypography>
  );
};

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-size: ${({ theme }) => theme.typography.fontSizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.vars.textHeading};
`;
