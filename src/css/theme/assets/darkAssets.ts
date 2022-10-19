import { colors } from "../colors";
import { AssetsType } from "./types";

const primary = colors.blue[6];
const success = colors.green[6];
const warning = colors.yellow[5];
const danger = colors.red[6];
const neutral = colors.white;

export const darkAssets: AssetsType = {
  // variants
  primary,
  success,
  warning,
  danger,
  neutral,

  // basics
  bgPrimary: colors.grey[10],
  bgSecondary: colors.grey[9],
  bgTertiary: colors.grey[8],
  title: colors.white,
  textPrimary: colors.grey[2],
  textSecondary: colors.grey[5],
  borderPrimary: colors.grey[8],
  borderSecondary: colors.grey[7],
  borderTertiary: colors.grey[6],
  hoverPrimary: colors.grey[8],
  hoverSecondary: colors.grey[7],
  disabledBg: colors.grey[7],
  disabledText: colors.grey[6],

  // input
  inputPlaceholder: colors.grey[5],

  // icon
  icon: colors.grey[5],
  iconHover: colors.grey[8],

  // alert
  alertPrimaryBg: colors.blue[9],
  alertPrimaryText: colors.blue[3],
  alertSuccessBg: colors.green[9],
  alertSuccessText: colors.green[3],
  alertWarningBg: colors.yellow[9],
  alertWarningText: colors.yellow[3],
  alertDangerBg: colors.red[9],
  alertDangerText: colors.red[3],
  alertNeutralBg: colors.grey[7],
  alertNeutralText: colors.grey[3],

  // avatar
  avatarBg: colors.white,
  avatarText: colors.black,

  // badge
  badgePrimaryBg: colors.blue[9],
  badgePrimaryText: colors.blue[3],
  badgeSuccessBg: colors.green[9],
  badgeSuccessText: colors.green[3],
  badgeWarningBg: colors.yellow[9],
  badgeWarningText: colors.yellow[3],
  badgeDangerBg: colors.red[9],
  badgeDangerText: colors.red[3],
  badgeNeutralBg: colors.grey[7],
  badgeNeutralText: colors.grey[3],

  //button
  buttonSolidPrimaryBg: primary,
  buttonSolidPrimaryText: colors.white,
  buttonSolidPrimaryHover: colors.blue[7],
  buttonSolidSuccessBg: success,
  buttonSolidSuccessText: colors.white,
  buttonSolidSuccessHover: colors.green[7],
  buttonSolidWarningBg: warning,
  buttonSolidWarningText: colors.white,
  buttonSolidWarningHover: colors.yellow[7],
  buttonSolidDangerBg: danger,
  buttonSolidDangerText: colors.white,
  buttonSolidDangerHover: colors.red[7],
  buttonSolidNeutralBg: neutral,
  buttonSolidNeutralText: colors.black,
  buttonSolidNeutralHover: colors.grey[2],

  buttonOutlinedBg: "transparent",
  buttonOutlinedHover: colors.grey[9],
  buttonOutlinedPrimary: primary,
  buttonOutlinedSuccess: success,
  buttonOutlinedWarning: warning,
  buttonOutlinedDanger: danger,
  buttonOutlinedNeutral: neutral,

  buttonGhostBg: "transparent",
  buttonGhostPrimaryText: primary,
  buttonGhostPrimaryHover: colors.blue[9],
  buttonGhostSuccessText: success,
  buttonGhostSuccessHover: colors.green[9],
  buttonGhostWarningText: warning,
  buttonGhostWarningHover: colors.yellow[9],
  buttonGhostDangerText: danger,
  buttonGhostDangerHover: colors.red[10],
  buttonGhostNeutralText: neutral,
  buttonGhostNeutralHover: colors.grey[9],

  buttonLinkBg: "transparent",
  buttonLinkPrimary: primary,
  buttonLinkSuccess: success,
  buttonLinkWarning: warning,
  buttonLinkDanger: danger,
  buttonLinkNeutral: neutral,

  buttonAlternativeBg: "transparent",
  buttonAlternativeText: colors.grey[5],
  buttonAlternativeBorder: colors.grey[7],
  buttonAlternativePrimaryHover: primary,
  buttonAlternativeSuccessHover: success,
  buttonAlternativeWarningHover: warning,
  buttonAlternativeDangerHover: danger,
  buttonAlternativeNeutralHover: neutral,

  // tooltip
  tooltipBg: colors.white,
  tooltipText: colors.black,

  // spinner
  spinnerColor: primary,
  spinnerBorder: colors.grey[8],

  // switch
  switchUnchecked: colors.grey[7],
  switchChecked: primary,

  //table
  tableHeaderBg: colors.grey[8],
  tableRowBg: colors.grey[9],
  tableRowBgHover: colors.grey[10],
  tableBorder: colors.grey[8],
  tableRowBorder: colors.grey[9],
};
