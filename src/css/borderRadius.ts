type BorderRadius = "none" | "sm" | "md" | "lg" | "full";

export type BorderRadiusType = Record<BorderRadius, string>;

export const borderRadius: BorderRadiusType = {
  none: "0",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  full: "9999px",
};
