import { useEffect } from "react";

type UseKeyPressParams = {
  targetKey: string;
  handler: () => void;
  enabled?: boolean;
};

export const useKeyPress = ({
  targetKey,
  handler,
  enabled = true,
}: UseKeyPressParams): void => {
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
