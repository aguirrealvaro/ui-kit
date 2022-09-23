import { darkColors } from "./darkColors";
import { lightColors } from "./lightColors";
import { BreakpointSize, ColorModeType, ThemeType, WidthPx } from "./types";
import { typography } from "./typography";

// Asset colors: title, primary text, secondary text, disable, border, dividers, background, transparency
// border radius
// z index
// box shadows
// transitions

const breakpoints: Record<BreakpointSize, WidthPx> = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1280px",
};

export const getTheme = (themeMode: ColorModeType): ThemeType => {
  const colors = themeMode === "light" ? lightColors : darkColors;

  return {
    typography,
    breakpoint: (size) => `@media (max-width: ${breakpoints[size]})`,
    colors,
  };
};
