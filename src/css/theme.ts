import { breakpoints } from "./breakpoints";
import { darkColors } from "./darkColors";
import { lightColors } from "./lightColors";
import { ColorModeType, ThemeType } from "./types";
import { typography } from "./typography";

// Asset colors: title, primary text, secondary text, disable, border, dividers, background, transparency
// border radius
// z index
// box shadows
// transitions

export const getTheme = (themeMode: ColorModeType): ThemeType => {
  const colors = themeMode === "light" ? lightColors : darkColors;

  return {
    typography,
    breakpoint: (size) => `@media (max-width: ${breakpoints[size]})`,
    colors,
  };
};
