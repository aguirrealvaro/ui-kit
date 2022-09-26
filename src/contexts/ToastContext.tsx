import {
  createContext,
  FunctionComponent,
  useCallback,
  useRef,
  useState,
  ReactNode,
} from "react";
import { ToastOptions, ToastPositionType, ToastProps } from "@/components/Toast/Toast.types";
import { ToastContainer } from "@/components/Toast/ToastContainer";

export type ToastContextType = {
  open: (content: ReactNode, options?: ToastOptions) => void;
  remove: (id: number) => void;
};

export const ToastContext = createContext<ToastContextType>({} as ToastContextType);

type ToastProviderProps = {
  children: ReactNode;
  position?: ToastPositionType;
};

export const ToastProvider: FunctionComponent<ToastProviderProps> = ({
  children,
  position = "top",
}) => {
  const toastIdRef = useRef<number>(0);
  const [toasts, setToast] = useState<ToastProps[]>([]);

  const open = useCallback((content: ReactNode, options?: ToastOptions) => {
    setToast((toasts) => [...toasts, { id: toastIdRef.current++, content, ...options }]);
  }, []);

  const remove = useCallback((id: number) => {
    setToast((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ open, remove }}>
      {!!toasts.length && <ToastContainer toasts={toasts} position={position} />}
      {children}
    </ToastContext.Provider>
  );
};
