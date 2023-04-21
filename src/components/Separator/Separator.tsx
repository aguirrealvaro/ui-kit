import { FunctionComponent } from "react";
import styled from "styled-components";
import { SeparatorOrientatorType } from "./Separator.types";
import { Spacing } from "@/css/theme/spacing";

type SeparatorProps = {
  orientation: SeparatorOrientatorType;
  spacing: Spacing;
};

export const Separator: FunctionComponent<SeparatorProps> = ({ orientation, spacing = 4 }) => {
  return <Line orientation={orientation} spacing={spacing} />;
};

const Line = styled.hr<{ orientation: SeparatorOrientatorType; spacing: Spacing }>`
  background-color: ${({ theme }) => theme.assets.border};
  border: none;
  margin: ${({ theme, spacing }) => theme.spacing[spacing]} 0;
  height: 1px;
`;
