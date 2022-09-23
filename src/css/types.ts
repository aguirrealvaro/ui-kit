import { BorderRadiusType } from "./borderRadius";
import { TypographyType } from "./typography";

export type ColorModeType = "light" | "dark";

export type BreakpointSize = "xs" | "sm" | "md" | "lg";

export type WidthPx = `${number}px`;

type Colors =
  | "red"
  | "vulcano"
  | "orange"
  | "gold"
  | "yellow"
  | "lime"
  | "green"
  | "cyan"
  | "blue"
  | "geekblue"
  | "purple"
  | "pink";

type Variants = "base" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type GreyVariants = Variants | 11 | 12 | 13;

export type CollorsType = Record<Colors, Record<Variants, string>> &
  Record<"grey", Record<GreyVariants, string>> & { brand: string };

export type ThemeType = {
  typography: TypographyType;
  breakpoint: (size: BreakpointSize) => string;
  colors: CollorsType;
  borderRadius: BorderRadiusType;
};
