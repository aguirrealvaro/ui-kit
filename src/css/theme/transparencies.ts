type Transparency = "low" | "medium" | "high";

export type TransparencyType = Record<Transparency, string>;

export const transparencies: TransparencyType = {
  low: "rgba(0, 0, 0, 0.2)",
  medium: "rgba(0, 0, 0, 0.5)",
  high: "rgba(0, 0, 0, 0.8)",
};
