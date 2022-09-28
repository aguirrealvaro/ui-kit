type Transition = "none" | "slow" | "normal" | "fast";

type Timing = "default";

export type TransitionsType = {
  durations: Record<Transition, number>;
  timing: Record<Timing, string>;
};

export const transitions: TransitionsType = {
  durations: {
    none: 0,
    slow: 300,
    normal: 200,
    fast: 100,
  },
  timing: {
    default: "ease-in",
  },
};
