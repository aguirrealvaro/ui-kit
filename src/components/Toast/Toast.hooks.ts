import { useContext } from "react";
import { ToastContext, ToastContextType } from "@/contexts/ToastContext";

export const useToast = (): ToastContextType => {
  return useContext(ToastContext);
};
