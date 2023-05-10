import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";

type H2Props = {
  children: ReactNode;
} & StyledTypographyProps;

export const H2: FunctionComponent<H2Props> = ({ children, ...styledProps }) => {
  return (
    <StyledTypography {...styledProps}>
      <Heading>{children}</Heading>
    </StyledTypography>
  );
};

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-size: ${({ theme }) => theme.typography.fontSizes["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.vars.textHeading};
`;
