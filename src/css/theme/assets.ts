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
  | "disabledBg"
  | "disabledText";

export type AssetsType = Record<Assets, string>;

const primary = colors.blue[6];
const success = colors.green[6];
const warning = colors.yellow[5];
const danger = colors.red[6];
const neutral = colors.black;

export const assets: AssetsType = {
  // variants
  primary,
  success,
  warning,
  danger,
  neutral,

  // basics
  bgPrimary: colors.grey[1],
  bgSecondary: colors.white,
  bgTertiary: colors.grey[2],

  border: "rgba(0, 0, 0, 0.1)",
  hover: "rgba(0, 0, 0, 0.05)",

  title: colors.black,
  textPrimary: colors.grey[9],
  textSecondary: colors.grey[6],

  disabledBg: colors.grey[4],
  disabledText: colors.grey[5],
};
