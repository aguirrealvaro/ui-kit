import { borderRadius, BorderRadiusType } from "./borderRadius";
import { breakpoints, BreakpointSize } from "./breakpoints";
import { type CollorsType, lightColors, darkColors } from "./colors";
import { shadows, ShadowsType } from "./shadows";
import { transitions, TransitionsType } from "./transitions";
import { typography, TypographyType } from "./typography";
import { zIndices, ZIndexType } from "./zIndices";

// Asset colors: title, primary text, secondary text, disable, border, dividers, background, transparency

export type ThemeModeType = "light" | "dark";

export type ThemeType = {
  typography: TypographyType;
  breakpoint: (size: BreakpointSize) => string;
  colors: CollorsType;
  borderRadius: BorderRadiusType;
  zIndices: ZIndexType;
  shadows: ShadowsType;
  transitions: TransitionsType;
};

export const getTheme = (themeMode: ThemeModeType): ThemeType => {
  const colors = themeMode === "light" ? lightColors : darkColors;

  return {
    typography,
    breakpoint: (size) => `@media (max-width: ${breakpoints[size]})`,
    colors,
    borderRadius,
    zIndices,
    shadows,
    transitions,
  };
};
