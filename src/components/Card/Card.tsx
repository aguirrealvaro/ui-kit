import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { CardVariantType } from "./Card.types";
import { Spacing } from "@/css/theme/spacing";

type CardProps = {
  children: ReactNode;
  variant?: CardVariantType;
  spacing?: Spacing;
};

const Card: FunctionComponent<CardProps> = ({
  children,
  spacing = 4,
  variant = "secondary",
}) => {
  return (
    <Container $spacing={spacing} $variant={variant}>
      {children}
    </Container>
  );
};

export { Card, type CardProps };

const Container = styled.div<{ $spacing: Spacing; $variant: CardVariantType }>`
  padding: ${({ theme, $spacing }) => theme.spacing[$spacing]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  background-color: ${({ theme, $variant }) => {
    const bgColors: Record<CardVariantType, string> = {
      primary: theme.vars.bgPrimary,
      secondary: theme.vars.bgSecondary,
    };
    return bgColors[$variant];
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;
