type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";

type WidthPx = `${number}px`;

type Colors = "black" | "white" | "blue" | "red" | "green" | "yellow" | "grey" | "lightGrey";

export type ThemeType = {
  fontFamily: string;
  breakpoint: (size: Size) => string;
  colors: Record<Colors, string>;
};

const sizes: Record<Size, WidthPx> = {
  xxs: "400px",
  xs: "480px",
  sm: "600px",
  md: "768px",
  lg: "900px",
  xl: "1024px",
};

export const theme = {
  fontFamily: "Arial",
  breakpoint: (size: Size) => `@media (max-width: ${sizes[size]})`,
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
};
