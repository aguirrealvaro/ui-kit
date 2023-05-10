import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";

type H3Props = {
  children: ReactNode;
} & StyledTypographyProps;

export const H3: FunctionComponent<H3Props> = ({ children, ...styledProps }) => {
  return (
    <StyledTypography {...styledProps}>
      <Heading>{children}</Heading>
    </StyledTypography>
  );
};

const Heading = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-size: ${({ theme }) => theme.typography.fontSizes["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
  color: ${({ theme }) => theme.vars.textHeading};
`;
