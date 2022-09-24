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
type GreyVariants = Variants | 11 | 12 | 13 | 14 | 15;

export type CollorsType = Record<Colors, Record<Variants, string>> &
  Record<"grey", Record<GreyVariants, string>> & { brand: string };

type Assets = "title" | "primaryText" | "secondaryText" | "disabled" | "background";

export type AssetsType = Record<Assets, string>;
