import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";

type BoldProps = {
  children: ReactNode;
} & StyledTypographyProps;

export const Bold: FunctionComponent<BoldProps> = ({ children, ...styledProps }) => {
  return (
    <StyledTypography {...styledProps}>
      <Heading>{children}</Heading>
    </StyledTypography>
  );
};

const Heading = styled.strong`
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-size: ${({ theme }) => theme.typography.fontSizes["md"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.assets.textPrimary};
`;
