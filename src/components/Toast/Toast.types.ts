import { ReactNode } from "react";

export type ToastVariantType = "default" | "positive" | "negative" | "warning" | "neutral";

export type ToastOptions = {
  duration?: number | "infinite";
  variant?: ToastVariantType;
};

export type ToastProps = {
  children?: ReactNode;
  id: number;
  content: ReactNode;
} & ToastOptions;
