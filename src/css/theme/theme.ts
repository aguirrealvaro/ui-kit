import { lightAssets, darkAssets, AssetsType } from "./assets";
import { borderRadius, BorderRadiusType } from "./borderRadius";
import { breakpoints, BreakpointSize } from "./breakpoints";
import { type CollorsType, colors } from "./colors";
import { shadows, type ShadowsType } from "./shadows";
import { sizes, type SizesType } from "./sizes";
import { spacing, type SpacingType } from "./spacing";
import { transitions, type TransitionsType } from "./transitions";
import { transparencies, type TransparencyType } from "./transparencies";
import { typography, type TypographyType } from "./typography";
import { zIndices, type ZIndexType } from "./zIndices";

export type ThemeModeType = "light" | "dark";

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

export const getTheme = (themeMode: ThemeModeType): ThemeType => {
  const assets = themeMode === "light" ? lightAssets : darkAssets;

  return {
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
};
