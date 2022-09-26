import { FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";
import { TitleSizeType, TitleType } from "./Title.types";
import { BreakpointSize } from "@/css/theme/breakpoints";
import { FontWeight } from "@/css/theme/typography";

type TitleProps = {
  children: ReactNode;
  as: TitleType;
  size: TitleSizeType;
  weight: FontWeight;
};

export const Title: FunctionComponent<TitleProps> = ({ children, as, size, weight }) => {
  return (
    <Container as={as} size={size} weight={weight}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ size: TitleSizeType; weight: FontWeight }>`
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-weight: ${({ theme, weight }) => theme.typography.fontWeights[weight]};
  ${({ size, theme }) => {
    if (typeof size === "string") {
      return css`
        font-size: ${theme.typography.fontSizes[size]};
      `;
    } else {
      let styles = "";
      Object.entries(size).forEach(([key, value]) => {
        styles += `
          ${theme.breakpoint(key as BreakpointSize)} {
            font-size: ${value};
          }
        `;
      });
      return css`
        ${styles}
      `;
    }
  }};
`;
