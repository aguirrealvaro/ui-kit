import { darkColors } from "./darkColors";
import { lightColors } from "./lightColors";
import { BreakpointSize, ColorModeType, ThemeType, WidthPx } from "./types";

const breakpoints: Record<BreakpointSize, WidthPx> = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1280px",
};

export const getTheme = (themeMode: ColorModeType): ThemeType => {
  const colors = themeMode === "light" ? lightColors : darkColors;

  return {
    fontFamily: "Arial",
    breakpoint: (size) => `@media (max-width: ${breakpoints[size]})`,
    colors,
  };
};
