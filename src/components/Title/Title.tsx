import { FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";
import { TitleSizeType, TitleType } from "./Title.types";
import { BreakpointSize, BREAKPOINTS_ORDER } from "@/css/theme/breakpoints";
import { FontWeight } from "@/css/theme/typography";
import { useTheme } from "@/hooks";

type TitleProps = {
  children: ReactNode;
  as: TitleType;
  size?: TitleSizeType;
  weight?: FontWeight;
  color?: string;
  upppercase?: boolean;
};

export const Title: FunctionComponent<TitleProps> = ({
  children,
  as,
  size = "xl",
  weight = "semibold",
  color,
  upppercase = false,
}) => {
  const { theme } = useTheme();

  return (
    <Container
      as={as}
      size={size}
      weight={weight}
      color={color || theme.assets.title}
      upppercase={upppercase}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<{
  size: TitleSizeType;
  weight: FontWeight;
  color: string;
  upppercase: boolean;
}>`
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-weight: ${({ theme, weight }) => theme.typography.fontWeights[weight]};
  color: ${({ color }) => color};
  text-transform: ${({ upppercase }) => upppercase && "uppercase"};
  ${({ size, theme }) => {
    if (typeof size === "string") {
      return css`
        font-size: ${theme.typography.fontSizes[size]};
      `;
    } else {
      const baseFontSize = (() => {
        const prioritySize = BREAKPOINTS_ORDER.find((bp) => {
          return Object.keys(size).includes(bp);
        });

        if (prioritySize) {
          return `font-size: ${size[prioritySize]};`;
        } else {
          return "";
        }
      })();

      const breakpointFontSizes = (() => {
        let breakpointStyles = "";

        Object.entries(size)
          .sort(([a], [b]) => {
            return (
              BREAKPOINTS_ORDER.indexOf(a as BreakpointSize) -
              BREAKPOINTS_ORDER.indexOf(b as BreakpointSize)
            );
          })
          .forEach(([key, value]) => {
            breakpointStyles += `${theme.breakpoint(
              key as BreakpointSize
            )} {font-size: ${value};}
        `;
          });

        return breakpointStyles;
      })();

      return css`
        ${baseFontSize}
        ${breakpointFontSizes}
      `;
    }
  }};
`;
