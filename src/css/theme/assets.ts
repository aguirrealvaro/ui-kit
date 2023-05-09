import { colors } from "./colors";

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
  | "border"
  | "hover"
  | "textHeading"
  | "textPrimary"
  | "textSecondary"
  | "disabledPrimary"
  | "disabledSecondary";

export type AssetsType = Record<Assets, string>;

export const assets: AssetsType = {
  // variants
  primary: colors.blue[600],
  success: colors.green[500],
  warning: colors.yellow[500],
  danger: colors.red[500],
  neutral: colors.grey[700],

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
