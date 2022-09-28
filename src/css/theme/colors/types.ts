type Colors =
  | "grey"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

type Variants = "base" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type CollorsType = Record<Colors, Record<Variants, string>>;

type Assets =
  | "brand"
  | "title"
  | "primary-text"
  | "secondary-text"
  | "disabled"
  | "body-background"
  | "input-border"
  | "input-placeholder";

export type AssetsType = Record<Assets, string>;
