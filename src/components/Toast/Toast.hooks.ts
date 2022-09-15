import { useContext } from "react";
import { ToastContext, ToastContextType } from "./ToastProvider";

export const useToast = (): ToastContextType => {
  return useContext(ToastContext);
};
