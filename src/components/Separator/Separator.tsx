import { FunctionComponent } from "react";
import styled from "styled-components";
import { SeparatorOrientatorType } from "./Separator.types";

type SeparatorProps = {
  orientation: SeparatorOrientatorType;
};

export const Separator: FunctionComponent<SeparatorProps> = ({ orientation }) => {
  return <Line orientation={orientation} />;
};

const Line = styled.hr<{ orientation: SeparatorOrientatorType }>`
  background-color: ${({ theme }) => theme.assets.border};
  border: none;
  margin: ${({ theme }) => theme.spacing[4]} 0;
  height: 1px;
`;
