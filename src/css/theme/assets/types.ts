type Assets =
  // variants
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "neutral"

  // greys
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
  | "icon"

  // alert
  | "alertPrimaryBg"
  | "alertPrimaryText"
  | "alertSuccessBg"
  | "alertSuccessText"
  | "alertWarningBg"
  | "alertWarningText"
  | "alertDangerBg"
  | "alertDangerText"
  | "alertNeutralBg"
  | "alertNeutralText";

export type AssetsType = Record<Assets, string>;
