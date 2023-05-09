import { Colors, colors } from "./colors";

type Assets =
  | Colors
  | "bgPrimary"
  | "bgSecondary"
  | "border"
  | "hover"
  | "textHeading"
  | "textPrimary"
  | "textSecondary"
  | "disabledPrimary"
  | "disabledSecondary";

export type AssetsType = Record<Assets, string>;

export const assets: AssetsType = {
  // colors
  grey: colors.grey[800],
  blue: colors.blue[600],
  green: colors.green[600],
  yellow: colors.yellow[600],
  red: colors.red[600],

  // basics
  bgPrimary: colors.grey[50],
  bgSecondary: colors.white,

  border: "rgba(0, 0, 0, 0.1)",
  hover: "rgba(0, 0, 0, 0.05)",

  textHeading: colors.black,
  textPrimary: colors.grey[900],
  textSecondary: colors.grey[600],

  disabledPrimary: colors.grey[300],
  disabledSecondary: colors.grey[500],
};
