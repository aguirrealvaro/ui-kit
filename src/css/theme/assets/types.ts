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
  | "alertNeutralText"

  // avatar
  | "avatarBg"
  | "avatarText"

  // badge
  | "badgePrimaryBg"
  | "badgePrimaryText"
  | "badgeSuccessBg"
  | "badgeSuccessText"
  | "badgeWarningBg"
  | "badgeWarningText"
  | "badgeDangerBg"
  | "badgeDangerText"
  | "badgeNeutralBg"
  | "badgeNeutralText";

export type AssetsType = Record<Assets, string>;
