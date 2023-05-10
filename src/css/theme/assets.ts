import { colors } from "./colors";

type Assets =
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
