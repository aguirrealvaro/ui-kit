import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type H1Props = {
  children: ReactNode;
};

export const H1: FunctionComponent<H1Props> = ({ children }) => {
  return <Heading>{children}</Heading>;
};

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-size: ${({ theme }) => theme.typography.fontSizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: ${({ theme }) => theme.assets.title};
`;
