import { FunctionComponent, ReactNode } from "react";
import styled, { css, RuleSet } from "styled-components";
import { Colors } from "@/css/theme/colors";

type BadgeProps = {
  children: ReactNode;
  colorScheme?: Colors;
};

const Badge: FunctionComponent<BadgeProps> = ({ children, colorScheme = "grey" }) => {
  return <Container $colorScheme={colorScheme}>{children}</Container>;
};

export { Badge, type BadgeProps };

const Container = styled.span<{ $colorScheme: Colors }>`
  padding: 0.2005em 0.4em;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  ${({ $colorScheme, theme }) => {
    const variantStyles: Record<Colors, RuleSet<object>> = {
      grey: css`
        background-color: ${theme.colors.grey[200]};
        color: ${theme.colors.grey.default};
      `,
      blue: css`
        background-color: ${theme.colors.blue[100]};
        color: ${theme.colors.blue[800]};
      `,
      green: css`
        background-color: ${theme.colors.green[100]};
        color: ${theme.colors.green[800]};
      `,
      red: css`
        background-color: ${theme.colors.red[100]};
        color: ${theme.colors.red[800]};
      `,
      yellow: css`
        background-color: ${theme.colors.yellow[100]};
        color: ${theme.colors.yellow[800]};
      `,
    };
    return variantStyles[$colorScheme];
  }};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
`;
