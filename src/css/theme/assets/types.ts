type Assets =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  ////
  | "title"
  | "primary-text"
  | "secondary-text"
  | "disabled"
  | "disabled-font"
  | "body-background"
  | "input-border"
  | "input-placeholder"
  /////
  | "bgPrimary"
  | "bgSecondary"
  | "textPrimary"
  | "textSecondary"
  | "borderPrimary"
  | "borderSecondary"
  | "icon";

export type AssetsType = Record<Assets, string>;
