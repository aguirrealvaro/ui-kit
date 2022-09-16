import { SizeType, BackgroundType } from "./Spinner.types";

export const SIZES: Record<SizeType, number> = {
  xs: 18,
  sm: 22,
  md: 26,
  lg: 30,
};

export const BACKGROUND_COLOR: Record<BackgroundType, string> = {
  light: "rgba(255, 255, 255, 0.7)",
  dark: "rgba(0, 0, 0, 0.2)",
};
