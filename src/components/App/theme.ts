type Size = "xs" | "sm" | "md" | "lg";

type WidthPx = `${number}px`;

type Colors = "black" | "white" | "blue" | "red" | "green" | "yellow" | "grey" | "lightGrey";

export type ThemeType = {
  fontFamily: string;
  breakpoint: (size: Size) => string;
  colors: Record<Colors, string>;
};

const sizes: Record<Size, WidthPx> = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1280px",
};

export const theme: ThemeType = {
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
};
