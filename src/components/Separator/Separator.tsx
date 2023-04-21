import { FunctionComponent } from "react";
import styled from "styled-components";
import { SeparatorOrientatorType } from "./Separator.types";
import { Spacing } from "@/css/theme/spacing";

type SeparatorProps = {
  orientation: SeparatorOrientatorType;
  preSpacing: Spacing;
  postSpacing: Spacing;
};

export const Separator: FunctionComponent<SeparatorProps> = ({
  orientation,
  preSpacing = 4,
  postSpacing = 4,
}) => {
  return <Line orientation={orientation} preSpacing={preSpacing} postSpacing={postSpacing} />;
};

const Line = styled.hr<{
  orientation: SeparatorOrientatorType;
  preSpacing: Spacing;
  postSpacing: Spacing;
}>`
  background-color: ${({ theme }) => theme.assets.border};
  border: none;
  margin-bottom: ${({ theme, preSpacing }) => theme.spacing[preSpacing]};
  margin-top: ${({ theme, postSpacing }) => theme.spacing[postSpacing]};
  height: 1px;
`;
