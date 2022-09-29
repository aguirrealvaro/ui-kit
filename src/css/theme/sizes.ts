import { spacing, Spacing } from "./spacing";

export type Sizes = Spacing | 12 | 14 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48;

export type SizesType = Record<Sizes, string>;

// Mental model: If you need a spacing of 40px, divide it by 4. That'll give you 10. Then use it in your component.

export const sizes: SizesType = {
  ...spacing,
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
};
