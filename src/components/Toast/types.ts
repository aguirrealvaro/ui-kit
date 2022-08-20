import { ReactNode } from "react";

export type ToastStatusType = "success" | "neutral" | "error";

export type ToastOptions = {
  permanent?: boolean;
  status?: ToastStatusType;
};

export type ToastType = {
  children?: ReactNode;
  id: number;
  content: string;
} & ToastOptions;
