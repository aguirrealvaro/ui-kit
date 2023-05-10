import { colors } from "./colors";

type Vars =
  | "bgPrimary"
  | "bgSecondary"
  | "border"
  | "hover"
  | "textHeading"
  | "textPrimary"
  | "textSecondary"
  | "disabledPrimary"
  | "disabledSecondary";

export type VarsType = Record<Vars, string>;

export const vars: VarsType = {
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
