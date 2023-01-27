type Shadow =
  | "none"
  | "card"
  | "sm"
  | "md"
  | "lg"
  | "outline-primary"
  | "outline-success"
  | "outline-danger"
  | "inset";

export type ShadowsType = Record<Shadow, string>;

export const shadows: ShadowsType = {
  none: "none",
  card: "0 1px 2px rgba(0, 0, 0, 0.2)",
  sm: "0px 4px 23px rgba(0, 0, 0, 0.10)",
  md: "0px 4px 23px rgba(0, 0, 0, 0.20)",
  lg: "0px 4px 23px rgba(0, 0, 0, 0.30)",
  "outline-primary": "0 0 0 2px #36a3ff",
  "outline-success": "0 0 0 2px #0E9F6E",
  "outline-danger": "0 0 0 2px #F05252",
  inset: "inset 0 0 5px rgba(0, 0, 0, 0.35)",
};
