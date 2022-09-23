import { borderRadius, BorderRadiusType } from "./borderRadius";
import { breakpoints, BreakpointSize } from "./breakpoints";
import { darkColors } from "./darkColors";
import { lightColors } from "./lightColors";
import { shadows, ShadowsType } from "./shadows";
import { transitions, TransitionsType } from "./transitions";
import { CollorsType } from "./types";
import { typography, TypographyType } from "./typography";
import { zIndices, ZIndexType } from "./zIndices";

// Asset colors: title, primary text, secondary text, disable, border, dividers, background, transparency

export type ColorModeType = "light" | "dark";

export type ThemeType = {
  typography: TypographyType;
  breakpoint: (size: BreakpointSize) => string;
  colors: CollorsType;
  borderRadius: BorderRadiusType;
  zIndices: ZIndexType;
  shadows: ShadowsType;
  transitions: TransitionsType;
};

export const getTheme = (themeMode: ColorModeType): ThemeType => {
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
