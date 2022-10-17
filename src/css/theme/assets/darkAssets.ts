import { colors } from "../colors";
import { AssetsType } from "./types";

export const darkAssets: AssetsType = {
  // variants
  primary: colors.blue[6],
  success: colors.green[6],
  warning: colors.yellow[5],
  danger: colors.red[6],
  neutral: colors.white,

  // greys
  bgPrimary: colors.grey[10],
  bgSecondary: colors.grey[9],
  title: colors.white,
  textPrimary: colors.grey[2],
  textSecondary: colors.grey[5],
  borderPrimary: colors.grey[8],
  borderSecondary: colors.grey[7],
  hoverPrimary: colors.grey[8],
  hoverSecondary: colors.grey[7],
  disabledBg: colors.grey[7],
  disabledText: colors.grey[6],

  // input
  inputPlaceholder: colors.grey[5],

  // icon
  icon: colors.grey[2],

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
};
