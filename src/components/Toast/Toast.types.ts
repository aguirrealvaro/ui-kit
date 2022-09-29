import { ReactNode } from "react";
import { VariantType } from "@/types";

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
  variant?: VariantType;
};

export type ToastProps = {
  children?: ReactNode;
  id: number;
  content: ReactNode;
} & ToastOptions;
