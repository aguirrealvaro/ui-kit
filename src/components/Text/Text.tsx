import { FunctionComponent, ReactNode } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { TextType } from "./Text.types";
import { FontSize, FontWeight } from "@/css/theme/typography";

type TextProps = {
  children: ReactNode;
  size?: FontSize;
  weight?: FontWeight;
  as?: TextType;
};

export const Text: FunctionComponent<TextProps> = ({ children, size, weight, as }) => {
  return (
    <Container as={as} size={size || "md"} weight={weight || "normal"}>
      {children}
    </Container>
  );
};

const Container = styled.p<{ size: FontSize; weight: FontWeight; as: TextType | undefined }>`
  margin: 0;
  font-family: ${({ theme }) => theme.typography.fontFamilies.heading};
  font-weight: ${({ theme, weight }) => theme.typography.fontWeights[weight]};
  font-size: ${({ theme, size }) => theme.typography.fontSizes[size]};

  ${({ as }) => {
    if (!as) return;
    const textStyles: Record<TextType, FlattenSimpleInterpolation> = {
      span: css``,
      strong: css``,
      i: css``,
      u: css``,
      del: css``,
      mark: css``,
      code: css``,
      kbd: css``,
    };

    return textStyles[as];
  }};
`;
