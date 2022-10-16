type Assets =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "neutral"
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
  | "hoverPrimary"
  | "hoverSecondary"
  | "disabledBg"
  | "disabledText"
  | "inputPlaceholder"
  | "icon";

export type AssetsType = Record<Assets, string>;
