import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";

type HighlightProps = {
  children: ReactNode;
} & StyledTypographyProps;

const Highlight: FunctionComponent<HighlightProps> = ({ children, ...styledProps }) => {
  return (
    <StyledTypography {...styledProps}>
      <Mark>{children}</Mark>
    </StyledTypography>
  );
};

const Mark = styled.mark`
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-size: ${({ theme }) => theme.typography.fontSizes["md"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  background-color: ${({ theme }) => theme.colors.yellow.default};
  color: ${({ theme }) => theme.tokens.textPrimary};
`;

export { Highlight, type HighlightProps };
