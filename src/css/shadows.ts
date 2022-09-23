type Shadow = "none" | "sm" | "md" | "lg" | "outline";

export type ShadowsType = Record<Shadow, string>;

export const shadows: ShadowsType = {
  none: "none",
  sm: "0px 4px 23px rgba(0, 0, 0, 0.10)",
  md: "0px 4px 23px rgba(0, 0, 0, 0.20)",
  lg: "0px 4px 23px rgba(0, 0, 0, 0.30)",
  outline: "0 0 0 2px rgba(66, 153, 225, 0.6)",
};
