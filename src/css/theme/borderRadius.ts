type BorderRadius = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "full";

export type BorderRadiusType = Record<BorderRadius, string>;

export const borderRadius: BorderRadiusType = {
  none: "0",
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px
  xl: "2rem", // 32px
  full: "9999px",
};
