import { SpinnerSizeType, SpinnerBackgroundType } from "./Spinner.types";

export const SPINER_SIZES: Record<SpinnerSizeType, number> = {
  xs: 18,
  sm: 22,
  md: 26,
  lg: 30,
};

export const SPINNER_BACKGROUND_COLOR: Record<SpinnerBackgroundType, string> = {
  light: "rgba(255, 255, 255, 0.7)",
  dark: "rgba(0, 0, 0, 0.2)",
};
