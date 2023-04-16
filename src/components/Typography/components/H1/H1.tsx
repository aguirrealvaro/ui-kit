import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { TypographyProps, withTypographyProps } from "@/components/Typography/utils";

type H1Props = {
  children: ReactNode;
} & TypographyProps;

const H1Component: FunctionComponent<H1Props> = ({ children }) => {
  return <Heading>{children}</Heading>;
};

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-size: ${({ theme }) => theme.typography.fontSizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.assets.title};
`;

export const H1 = withTypographyProps(H1Component);
