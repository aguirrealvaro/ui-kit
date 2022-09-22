export type ColorModeType = "light" | "dark";

export type BreakpointSize = "xs" | "sm" | "md" | "lg";

export type WidthPx = `${number}px`;

export type Colors =
  | "black"
  | "white"
  | "blue"
  | "red"
  | "green"
  | "yellow"
  | "grey"
  | "lightGrey";

export type Pallets =
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

export type Variants = "base" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type GreyVariants = Variants | 11 | 12 | 13;
export type Hexadecimal = `#${string}`;

export type PalleteType = Record<Pallets, Record<Variants, Hexadecimal>> &
  Record<"grey", Record<GreyVariants, Hexadecimal>> & { brand: Hexadecimal };

export type ThemeType = {
  fontFamily: string;
  breakpoint: (size: BreakpointSize) => string;
  colors: Record<Colors, string>;
  palette: PalleteType;
};
