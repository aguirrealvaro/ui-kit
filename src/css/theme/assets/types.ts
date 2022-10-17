type Assets =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "neutral"
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
