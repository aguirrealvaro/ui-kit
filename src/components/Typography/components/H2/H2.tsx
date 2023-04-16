import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type H2Props = {
  children: ReactNode;
};

export const H2: FunctionComponent<H2Props> = ({ children }) => {
  return <Heading>{children}</Heading>;
};

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-size: ${({ theme }) => theme.typography.fontSizes["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  color: ${({ theme }) => theme.assets.title};
`;
