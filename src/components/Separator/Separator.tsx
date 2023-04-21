import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
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
  ${({ theme, orientation, preSpacing, postSpacing }) => {
    if (orientation === "horizontal") {
      return css`
        margin-bottom: ${theme.spacing[preSpacing]};
        margin-top: ${theme.spacing[postSpacing]};
        height: 1px;
      `;
    } else {
      return css`
        margin-left: ${theme.spacing[preSpacing]};
        margin-right: ${theme.spacing[postSpacing]};
        width: 1px;
      `;
    }
  }}
`;
