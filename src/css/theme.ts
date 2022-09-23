import { darkColors } from "./darkColors";
import { lightColors } from "./lightColors";
import { BreakpointSize, ColorModeType, ThemeType, WidthPx } from "./types";

/* antd */
// Typography: font family, font size, line height, font weight
// Asset colors: title, primary text, secondary text, disable, border, dividers, background, transparency

/* chakra */
// Typography: font family, font size, line height, font weight, letter spacing
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
    fontFamily: `Arial, "Segoe UI"`,
    breakpoint: (size) => `@media (max-width: ${breakpoints[size]})`,
    colors,
  };
};
