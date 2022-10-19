type Assets =
  // variants
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "neutral"

  // basics
  | "bgPrimary"
  | "bgSecondary"
  | "bgTertiary"
  | "title"
  | "textPrimary"
  | "textSecondary"
  | "borderPrimary"
  | "borderSecondary"
  | "borderTertiary"
  | "hoverPrimary"
  | "hoverSecondary"
  | "disabledBg"
  | "disabledText"

  // input
  | "inputPlaceholder"

  // icon
  | "icon"
  | "iconHover"

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
  | "badgeNeutralText"

  // button
  | "buttonSolidPrimaryBg"
  | "buttonSolidPrimaryText"
  | "buttonSolidPrimaryHover"
  | "buttonSolidSuccessBg"
  | "buttonSolidSuccessText"
  | "buttonSolidSuccessHover"
  | "buttonSolidWarningBg"
  | "buttonSolidWarningText"
  | "buttonSolidWarningHover"
  | "buttonSolidDangerBg"
  | "buttonSolidDangerText"
  | "buttonSolidDangerHover"
  | "buttonSolidNeutralBg"
  | "buttonSolidNeutralText"
  | "buttonSolidNeutralHover"
  | "buttonOutlinedBg"
  | "buttonOutlinedHover"
  | "buttonOutlinedPrimary"
  | "buttonOutlinedSuccess"
  | "buttonOutlinedWarning"
  | "buttonOutlinedDanger"
  | "buttonOutlinedNeutral"
  | "buttonGhostBg"
  | "buttonGhostPrimaryText"
  | "buttonGhostPrimaryHover"
  | "buttonGhostSuccessText"
  | "buttonGhostSuccessHover"
  | "buttonGhostWarningText"
  | "buttonGhostWarningHover"
  | "buttonGhostDangerText"
  | "buttonGhostDangerHover"
  | "buttonGhostNeutralText"
  | "buttonGhostNeutralHover"
  | "buttonLinkBg"
  | "buttonLinkPrimary"
  | "buttonLinkSuccess"
  | "buttonLinkWarning"
  | "buttonLinkDanger"
  | "buttonLinkNeutral"
  | "buttonAlternativeBg"
  | "buttonAlternativeText"
  | "buttonAlternativeBorder"
  | "buttonAlternativePrimaryHover"
  | "buttonAlternativeSuccessHover"
  | "buttonAlternativeWarningHover"
  | "buttonAlternativeDangerHover"
  | "buttonAlternativeNeutralHover"

  // tooltip
  | "tooltipBg"
  | "tooltipText"

  // spinner
  | "spinnerBorder"
  | "spinnerColor"

  // switch
  | "switchUnchecked"
  | "switchChecked";

export type AssetsType = Record<Assets, string>;
