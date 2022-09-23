type Transition = "none" | "slow" | "normal" | "fast";

export type TransitionsType = Record<Transition, number>;

export const transitions: TransitionsType = {
  none: 0,
  slow: 300,
  normal: 200,
  fast: 100,
};
