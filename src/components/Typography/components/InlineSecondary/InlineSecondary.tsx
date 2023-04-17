import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { StyledTypography, StyledTypographyProps } from "../StyledTypography/StyledTypography";

type InlineSecondaryProps = {
  children: ReactNode;
} & StyledTypographyProps;

export const InlineSecondary: FunctionComponent<InlineSecondaryProps> = ({
  children,
  ...styledProps
}) => {
  return (
    <StyledTypography {...styledProps}>
      <Heading>{children}</Heading>
    </StyledTypography>
  );
};

const Heading = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-size: ${({ theme }) => theme.typography.fontSizes["md"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.normal};
  color: ${({ theme }) => theme.assets.textSecondary};
`;
