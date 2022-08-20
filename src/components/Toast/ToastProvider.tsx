import {
  createContext,
  FunctionComponent,
  useCallback,
  useRef,
  useState,
  ReactNode,
} from "react";
import { ToastType, ToastOptions } from ".";
import { ToastContainer } from "./ToastContainer";

export type ToastContextType = {
  open: (content: string, options?: ToastOptions) => void;
  remove: (id: number) => void;
};

export const ToastContext = createContext<ToastContextType>({} as ToastContextType);

type ToastProviderProps = {
  children: ReactNode;
};

export const ToastProvider: FunctionComponent<ToastProviderProps> = ({ children }) => {
  const toastIdRef = useRef<number>(0);
  const [toasts, setToast] = useState<ToastType[]>([]);

  const open = useCallback(
    (content: string, options: ToastOptions = { permanent: false, status: "neutral" }) => {
      setToast((toasts) => [...toasts, { id: toastIdRef.current++, content, ...options }]);
    },
    []
  );

  const remove = useCallback((id: number) => {
    setToast((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ open, remove }}>
      {!!toasts.length && <ToastContainer toasts={toasts} />}
      {children}
    </ToastContext.Provider>
  );
};
