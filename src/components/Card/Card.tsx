import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { CardKindType } from "./Card.types";
import { Spacing } from "@/css/theme/spacing";

type CardProps = {
  children: ReactNode;
  kind?: CardKindType;
  spacing?: Spacing;
};

export const Card: FunctionComponent<CardProps> = ({
  children,
  spacing = 4,
  kind = "secondary",
}) => {
  return (
    <Container spacing={spacing} kind={kind}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ spacing: Spacing; kind: CardKindType }>`
  padding: ${({ theme, spacing }) => theme.spacing[spacing]};
  box-shadow: ${({ theme }) => theme.shadows.card};
  background-color: ${({ theme, kind }) => {
    const bgColors: Record<CardKindType, string> = {
      primary: theme.assets.bgPrimary,
      secondary: theme.assets.bgSecondary,
    };
    return bgColors[kind];
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;
