import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TextSizeType, TextType } from "./Text.types";
import { BreakpointSize, BREAKPOINTS_ORDER } from "@/css/theme/breakpoints";
import { FontWeight } from "@/css/theme/typography";
import { useTheme } from "@/hooks";

type TextProps = {
  children: ReactNode;
  size?: TextSizeType;
  weight?: FontWeight;
  as?: TextType;
  color?: string;
  upppercase?: boolean;
};

export const Text: FunctionComponent<TextProps> = ({
  children,
  size,
  weight,
  as,
  color,
  upppercase = false,
}) => {
  const { theme } = useTheme();

  return (
    <Container
      as={as}
      size={size}
      weight={weight}
      color={color || theme.assets.textPrimary}
      upppercase={upppercase}
    >
      {children}
    </Container>
  );
};

const Container = styled.p<{
  size: TextSizeType | undefined;
  weight: FontWeight | undefined;
  as: TextType | undefined;
  upppercase: boolean;
}>`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-weight: ${({ theme, weight }) => weight && theme.typography.fontWeights[weight]};
  color: ${({ color }) => color};
  text-transform: ${({ upppercase }) => upppercase && "uppercase"};
  ${({ as, theme }) => {
    if (!as) return;
    const textStyles: Partial<Record<TextType, FlattenSimpleInterpolation | undefined>> = {
      mark: css`
        background-color: ${theme.assets.warning};
        color: ${theme.colors.grey[1]};
      `,
      code: css`
        font-family: ${theme.typography.fontFamilies.mono};
        font-size: ${theme.typography.fontSizes.xs};
        margin: ${`0 ${theme.spacing[0.5]}`};
        padding: ${`${theme.spacing[0.5]} ${theme.spacing[1]}`};
        background-color: rgba(150, 150, 150, 0.1);
        border: 1px solid rgba(100, 100, 100, 0.2);
        border-radius: ${theme.borderRadius.xs};
      `,
      kbd: css`
        font-family: ${theme.typography.fontFamilies.mono};
        font-size: ${theme.typography.fontSizes.xs};
        margin: ${`0 ${theme.spacing[0.5]}`};
        padding: ${`${theme.spacing[0.5]} ${theme.spacing[1]}`};
        background-color: rgba(150, 150, 150, 0.1);
        border: 1px solid rgba(100, 100, 100, 0.2);
        border-radius: ${theme.borderRadius.xs};
      `,
    };

    return textStyles[as];
  }};

  ${({ size, theme }) => {
    if (!size) return;
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
