type Transition = "none" | "slow" | "normal" | "fast";

export type TransitionsType = Record<Transition, string>;

export const transitions: TransitionsType = {
  none: "0",
  slow: "300ms",
  normal: "200ms",
  fast: "100ms",
};
