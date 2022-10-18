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
  | "title"
  | "textPrimary"
  | "textSecondary"
  | "borderPrimary"
  | "borderSecondary"
  | "hoverPrimary"
  | "hoverSecondary"
  | "disabledBg"
  | "disabledText"

  // input
  | "inputPlaceholder"

  // icon
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

// button
/* | "buttonPrimarySolidBg"
  | "buttonPrimarySolidText"
  | "buttonPrimarySolidHover"
  | "buttonPrimaryOutlinedBg"
  | "buttonPrimaryOutlinedText"
  | "buttonPrimaryOutlinedHover"
  | "buttonPrimaryGhostBg"
  | "buttonPrimaryGhostText"
  | "buttonPrimaryGhostHover"
  | "buttonPrimaryLinkBg"
  | "buttonPrimaryLinkText"
  | "buttonPrimaryAlternativeBg"
  | "buttonPrimaryAlternativeText"
  | "buttonPrimaryAlternativeHover"
  | "buttonPrimaryAlternativeBorder"
  //
  | "buttonSolidPrimaryBg"
  | "buttonSolidPrimaryText"
  | "buttonSolidPrimaryHover"
  //
  | "buttonOutlinedBg"
  | "buttonOutlinedHover"
  | "buttonOutlinedPrimaryText"
  //
  | "buttonGhostBg"
  | "buttonGhostPrimaryText"
  | "buttonGhostPrimaryBg"
  //
  | "buttonLinkBg"
  | "buttonLinkPrimaryBg"
  //
  | "buttonAlternativeBg"
  | "buttonAlternativeText"
  | "buttonAlternativeBorder"
  | "buttonAlternativeHover"; */

export type AssetsType = Record<Assets, string>;
