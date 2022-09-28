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

type Variants = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type CollorsType = Record<Colors, Record<Variants, string>>;

type Assets =
  | "brand"
  | "success"
  | "warning"
  | "error"
  | "title"
  | "primary-text"
  | "secondary-text"
  | "disabled"
  | "disabled-font"
  | "body-background"
  | "input-border"
  | "input-placeholder";

export type AssetsType = Record<Assets, string>;
