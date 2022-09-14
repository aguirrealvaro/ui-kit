import { useEffect } from "react";

type OptionsType = {
  targetKey: string;
  handler: () => void;
  enabled?: boolean;
};

export const useOnKeyPress = ({ targetKey, handler, enabled = true }: OptionsType): void => {
  useEffect(() => {
    if (!enabled) return;
    const listener = (e: KeyboardEvent) => {
      if (e.key === targetKey) handler();
    };

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handler, enabled, targetKey]);
};
