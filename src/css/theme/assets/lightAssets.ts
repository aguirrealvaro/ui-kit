import { colors } from "../colors";
import { AssetsType } from "./types";

export const lightAssets: AssetsType = {
  // variants
  primary: colors.blue[6],
  success: colors.green[6],
  warning: colors.yellow[5],
  danger: colors.red[6],
  neutral: colors.black,

  // greys
  bgPrimary: colors.grey[1],
  bgSecondary: colors.white,
  title: colors.black,
  textPrimary: colors.grey[9],
  textSecondary: colors.grey[7],
  borderPrimary: colors.grey[3],
  borderSecondary: colors.grey[2],
  hoverPrimary: colors.grey[2],
  hoverSecondary: colors.grey[1],
  disabledBg: colors.grey[4],
  disabledText: colors.grey[5],

  // input
  inputPlaceholder: colors.grey[6],

  // icon
  icon: colors.grey[9],

  // alert
  alertPrimaryBg: colors.blue[2],
  alertPrimaryText: colors.blue[8],
  alertSuccessBg: colors.green[2],
  alertSuccessText: colors.green[8],
  alertWarningBg: colors.yellow[2],
  alertWarningText: colors.yellow[8],
  alertDangerBg: colors.red[2],
  alertDangerText: colors.red[8],
  alertNeutralBg: colors.grey[3],
  alertNeutralText: colors.grey[8],

  // avatar
  avatarBg: colors.black,
  avatarText: colors.white,

  // badge
  badgePrimaryBg: colors.blue[2],
  badgePrimaryText: colors.blue[8],
  badgeSuccessBg: colors.green[2],
  badgeSuccessText: colors.green[8],
  badgeWarningBg: colors.yellow[2],
  badgeWarningText: colors.yellow[8],
  badgeDangerBg: colors.red[2],
  badgeDangerText: colors.red[8],
  badgeNeutralBg: colors.grey[3],
  badgeNeutralText: colors.grey[8],
};
