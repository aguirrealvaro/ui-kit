import { assets, AssetsType } from "./assets";
import { borderRadius, BorderRadiusType } from "./borderRadius";
import { breakpoints, BreakpointSize } from "./breakpoints";
import { colors, type CollorsType } from "./colors";
import { shadows, type ShadowsType } from "./shadows";
import { sizes, type SizesType } from "./sizes";
import { spacing, type SpacingType } from "./spacing";
import { transitions, type TransitionsType } from "./transitions";
import { transparencies, type TransparencyType } from "./transparencies";
import { typography, type TypographyType } from "./typography";
import { zIndices, type ZIndexType } from "./zIndices";

export type ThemeType = {
  typography: TypographyType;
  breakpoint: (size: BreakpointSize) => string;
  colors: CollorsType;
  borderRadius: BorderRadiusType;
  zIndices: ZIndexType;
  shadows: ShadowsType;
  transitions: TransitionsType;
  assets: AssetsType;
  transparencies: TransparencyType;
  spacing: SpacingType;
  sizes: SizesType;
};

export const theme: ThemeType = {
  typography,
  breakpoint: (size) => `@media (max-width: ${breakpoints[size]})`,
  colors,
  borderRadius,
  zIndices,
  shadows,
  transitions,
  assets,
  transparencies,
  spacing,
  sizes,
};
