export type BreakpointSize = "xs" | "sm" | "md" | "lg" | "xl";

export const breakpoints: Record<BreakpointSize, string> = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1280px",
  xl: "1440px",
};

export const BREAKPOINTS_ORDER: BreakpointSize[] = ["md", "sm", "sm", "lg", "xl"];
