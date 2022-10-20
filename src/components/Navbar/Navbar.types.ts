import { ReactNode } from "react";

export type NavbarItem = {
  label: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  show?: boolean;
};
