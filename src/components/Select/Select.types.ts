import { ReactNode } from "react";

export type SelectFieldType = {
  label: ReactNode;
  value: string;
  disabled?: boolean;
};

export type SelectSizeType = "sm" | "md" | "lg";
