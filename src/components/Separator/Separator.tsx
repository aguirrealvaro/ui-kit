import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { SeparatorOrientatorType } from "./Separator.types";
import { Spacing } from "@/css/theme/spacing";

type SeparatorProps = {
  orientation?: SeparatorOrientatorType;
  spacing?: Spacing;
};

export const Separator: FunctionComponent<SeparatorProps> = ({
  orientation = "horizontal",
  spacing = 4,
}) => {
  return <Line role="separator" orientation={orientation} spacing={spacing} />;
};

const Line = styled.div<{
  orientation: SeparatorOrientatorType;
  spacing: Spacing;
}>`
  background-color: ${({ theme }) => theme.vars.border};
  border: none;
  ${({ theme, orientation, spacing }) => {
    if (orientation === "horizontal") {
      return css`
        margin-top: ${theme.spacing[spacing]};
        margin-bottom: ${theme.spacing[spacing]};
        height: 1px;
      `;
    } else {
      return css`
        margin-left: ${theme.spacing[spacing]};
        margin-right: ${theme.spacing[spacing]};
        width: 1px;
      `;
    }
  }}
`;
