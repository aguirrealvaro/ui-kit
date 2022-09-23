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
type Hexadecimal = `#${string}`;

export type PalleteType = Record<Colors, Record<Variants, Hexadecimal>> &
  Record<"grey", Record<GreyVariants, Hexadecimal>> & { brand: Hexadecimal };

export type ThemeType = {
  fontFamily: string;
  breakpoint: (size: BreakpointSize) => string;
  colors: PalleteType;
};
