import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";

type H4Props = {
  children: ReactNode;
} & StyledTypographyProps;

export const H4: FunctionComponent<H4Props> = ({ children, ...styledProps }) => {
  return (
    <StyledTypography {...styledProps}>
      <Heading>{children}</Heading>
    </StyledTypography>
  );
};

const Heading = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-size: ${({ theme }) => theme.typography.fontSizes["xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  color: ${({ theme }) => theme.assets.title};
`;
