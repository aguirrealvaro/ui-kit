import { borderRadius, BorderRadiusType } from "./borderRadius";
import { breakpoints, BreakpointSize } from "./breakpoints";
import { colors, type ColorsType } from "./colors";
import { shadows, type ShadowsType } from "./shadows";
import { spacing, type SpacingType } from "./spacing";
import { transitions, type TransitionsType } from "./transitions";
import { transparencies, type TransparencyType } from "./transparencies";
import { typography, type TypographyType } from "./typography";
import { vars, type VarsType } from "./vars";
import { zIndex, type ZIndexType } from "./zIndex";

export type ThemeType = {
  typography: TypographyType;
  breakpoint: (size: BreakpointSize) => string;
  colors: ColorsType;
  borderRadius: BorderRadiusType;
  zIndex: ZIndexType;
  shadows: ShadowsType;
  transitions: TransitionsType;
  vars: VarsType;
  transparencies: TransparencyType;
  spacing: SpacingType;
};

export const theme: ThemeType = {
  typography,
  breakpoint: (size) => `@media (max-width: ${breakpoints[size]})`,
  colors,
  borderRadius,
  zIndex,
  shadows,
  transitions,
  vars,
  transparencies,
  spacing,
};
