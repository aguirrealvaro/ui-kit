import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";

type Codeprops = {
  children: ReactNode;
} & StyledTypographyProps;

export const Code: FunctionComponent<Codeprops> = ({ children, ...styledProps }) => {
  return (
    <StyledTypography {...styledProps}>
      <Mark>{children}</Mark>
    </StyledTypography>
  );
};

const Mark = styled.code`
  font-family: ${({ theme }) => theme.typography.fontFamilies.mono};
  font-size: ${({ theme }) => theme.typography.fontSizes["xs"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  background-color: rgba(150, 150, 150, 0.1);
  border: 1px solid rgba(100, 100, 100, 0.2);
  margin: ${({ theme }) => `0 ${theme.spacing[0.5]}`};
  padding: ${({ theme }) => `${theme.spacing[0.5]} ${theme.spacing[1]}`};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;
