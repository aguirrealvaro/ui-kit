import { ReactNode } from "react";
import { Colors } from "@/css/theme/colors";

export type ToastPositionType =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "top-right"
  | "bottom-right"
  | "bottom-left"
  | "top-left";

export type ToastOptions = {
  duration?: number | "infinite";
  colorScheme?: Colors;
};

export type ToastProps = {
  children?: ReactNode;
  id: number;
  content: ReactNode;
} & ToastOptions;
