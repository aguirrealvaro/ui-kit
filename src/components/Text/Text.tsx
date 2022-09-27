import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TextType } from "./Text.types";
import { FontSize, FontWeight } from "@/css/theme/typography";
import { useTheme } from "@/hooks";

type TextProps = {
  children: ReactNode;
  size?: FontSize;
  weight?: FontWeight;
  as?: TextType;
  color?: string;
};

export const Text: FunctionComponent<TextProps> = ({ children, size, weight, as, color }) => {
  const { theme } = useTheme();

  return (
    <Container as={as} size={size} weight={weight} color={color || theme.assets.primaryText}>
      {children}
    </Container>
  );
};

const Container = styled.p<{
  size: FontSize | undefined;
  weight: FontWeight | undefined;
  as: TextType | undefined;
}>`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilies.body};
  font-weight: ${({ theme, weight }) => weight && theme.typography.fontWeights[weight]};
  font-size: ${({ theme, size }) => size && theme.typography.fontSizes[size]};
  color: ${({ color }) => color};

  ${({ as, theme }) => {
    if (!as) return;
    const textStyles: Partial<Record<TextType, FlattenSimpleInterpolation | undefined>> = {
      code: css`
        font-family: ${theme.typography.fontFamilies.mono};
        font-size: ${theme.typography.fontSizes.xs};
        margin: 0 4px;
        padding: 2px 4px;
        background: rgba(150, 150, 150, 0.1);
        border: 1px solid rgba(100, 100, 100, 0.2);
        border-radius: 3px;
      `,
      kbd: css`
        font-family: ${theme.typography.fontFamilies.mono};
        font-size: ${theme.typography.fontSizes.xs};
        margin: 0 4px;
        padding: 2px 4px;
        background: rgba(150, 150, 150, 0.1);
        border: 1px solid rgba(100, 100, 100, 0.2);
        border-radius: 3px;
      `,
    };

    return textStyles[as];
  }};
`;
