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
  | "bgTertiary"
  | "border"
  | "hover"
  | "title"
  | "textPrimary"
  | "textSecondary"
  | "disabledPrimary"
  | "disabledSecondary";

export type AssetsType = Record<Assets, string>;

const primary = colors.blue[500];
const success = colors.green[500];
const warning = colors.yellow[500];
const danger = colors.red[500];
const neutral = colors.black;

export const assets: AssetsType = {
  // variants
  primary,
  success,
  warning,
  danger,
  neutral,

  // basics
  bgPrimary: colors.grey[50],
  bgSecondary: colors.white,
  bgTertiary: colors.grey[100],

  border: "rgba(0, 0, 0, 0.1)",
  hover: "rgba(0, 0, 0, 0.05)",

  title: colors.black,
  textPrimary: colors.grey[900],
  textSecondary: colors.grey[600],

  disabledPrimary: colors.grey[300],
  disabledSecondary: colors.grey[500],
};
