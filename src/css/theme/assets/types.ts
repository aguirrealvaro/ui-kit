type Assets =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "neutral"
  ////
  | "disabled-font"
  | "input-border"
  | "input-placeholder"
  /////
  | "bgPrimary"
  | "bgSecondary"
  | "title"
  | "textPrimary"
  | "textSecondary"
  | "borderPrimary"
  | "borderSecondary"
  | "hoverPrimary"
  | "hoverSecondary"
  | "disabledBg"
  | "disabledText"
  | "inputPlaceholder"
  | "icon";

export type AssetsType = Record<Assets, string>;
