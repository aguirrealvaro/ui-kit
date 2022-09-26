import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { HeadingType } from "./Title.types";
import { FontSize, FontWeight } from "@/css/theme/typography";

type TitleProps = {
  children: ReactNode;
  as: HeadingType;
  size: FontSize;
  weight: FontWeight;
};

export const Title: FunctionComponent<TitleProps> = ({ children, as, size, weight }) => {
  return (
    <Container as={as} size={size} weight={weight}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ size: FontSize; weight: FontWeight }>`
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-size: ${({ theme, size }) => theme.typography.fontSizes[size]};
  font-weight: ${({ theme, weight }) => theme.typography.fontWeights[weight]};
`;
