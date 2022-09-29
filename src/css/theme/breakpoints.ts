export type BreakpointSize = "xs" | "sm" | "md" | "lg" | "xl";

export const breakpoints: Record<BreakpointSize, string> = {
  xs: "30em", //480px
  sm: "48em", //768px
  md: "62em", //992px
  lg: "80em", //1280px
  xl: "96em", //1440px
};

export const BREAKPOINTS_ORDER: BreakpointSize[] = ["xl", "lg", "md", "sm", "xs"];
