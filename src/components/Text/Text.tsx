import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { FontSize, FontWeight } from "@/css/theme/typography";

type TextProps = {
  children: ReactNode;
  size?: FontSize;
  weight?: FontWeight;
};

export const Text: FunctionComponent<TextProps> = ({ children, size, weight }) => {
  return (
    <Container size={size || "md"} weight={weight || "normal"}>
      {children}
    </Container>
  );
};

const Container = styled.p<{ size: FontSize; weight: FontWeight }>`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-weight: ${({ theme, weight }) => theme.typography.fontWeights[weight]};
  font-size: ${({ theme, size }) => theme.typography.fontSizes[size]};
`;
