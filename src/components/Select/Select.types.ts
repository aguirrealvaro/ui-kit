import { ReactNode } from "react";

export type SelectFieldType = {
  label: ReactNode;
  value: string;
  searchPattern?: string;
  disabled?: boolean;
};

export type SelectSizeType = "sm" | "md" | "lg";
