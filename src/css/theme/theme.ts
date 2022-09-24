import { borderRadius, BorderRadiusType } from "./borderRadius";
import { breakpoints, BreakpointSize } from "./breakpoints";
import { type CollorsType, lightColors, darkColors } from "./colors";
import { darkAssets } from "./colors/darkColors";
import { lightAssets } from "./colors/lightColors";
import { AssetsType } from "./colors/types";
import { shadows, ShadowsType } from "./shadows";
import { transitions, TransitionsType } from "./transitions";
import { typography, TypographyType } from "./typography";
import { zIndices, ZIndexType } from "./zIndices";

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
};

export const getTheme = (themeMode: ThemeModeType): ThemeType => {
  const colors = themeMode === "light" ? lightColors : darkColors;
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
  };
};
