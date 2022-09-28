type Transition = "none" | "slow" | "normal" | "fast";

type Timing = "linear" | "in" | "out";

export type TransitionsType = {
  durations: Record<Transition, number>;
  timings: Record<Timing, string>;
};

export const transitions: TransitionsType = {
  durations: {
    none: 0,
    slow: 300,
    normal: 200,
    fast: 100,
  },
  timings: {
    linear: "linear",
    in: "ease-in",
    out: "ease-out",
  },
};
