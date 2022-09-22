import { darkColors } from "./darkColors";
import { lightColors } from "./lightColors";
import { BreakpointSize, ColorModeType, ThemeType, WidthPx } from "./types";

const sizes: Record<BreakpointSize, WidthPx> = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1280px",
};

export const getTheme = (colorMode: ColorModeType): ThemeType => {
  const colors = colorMode === "light" ? lightColors : darkColors;

  return {
    fontFamily: "Arial",
    breakpoint: (size) => `@media (max-width: ${sizes[size]})`,
    colors: {
      black: "#000000",
      white: "#ffffff",
      blue: "#0072FF",
      red: "#FF4658",
      green: "#05944F",
      yellow: "#FFC043",
      grey: "#626262",
      lightGrey: "#d3d3d3",
    },
    palette: colors,
  };
};
