import { borderRadius, BorderRadiusType } from "./borderRadius";
import { breakpoints, BreakpointSize } from "./breakpoints";
import { darkColors } from "./darkColors";
import { lightColors } from "./lightColors";
import { CollorsType } from "./types";
import { typography, TypographyType } from "./typography";

// Asset colors: title, primary text, secondary text, disable, border, dividers, background, transparency
// border radius
// z index
// box shadows
// transitions

export type ColorModeType = "light" | "dark";

export type ThemeType = {
  typography: TypographyType;
  breakpoint: (size: BreakpointSize) => string;
  colors: CollorsType;
  borderRadius: BorderRadiusType;
};

export const getTheme = (themeMode: ColorModeType): ThemeType => {
  const colors = themeMode === "light" ? lightColors : darkColors;

  return {
    typography,
    breakpoint: (size) => `@media (max-width: ${breakpoints[size]})`,
    colors,
    borderRadius,
  };
};
