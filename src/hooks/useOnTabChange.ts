import { useEffect } from "react";

export const useOnTabChange = (callback: () => void, deps: any[]): void => {
  useEffect(() => {
    const handleDocumentVisibility = () => {
      if (!document.hidden) callback();
    };

    document.addEventListener("visibilitychange", handleDocumentVisibility);
    return () => document.removeEventListener("visibilitychange", handleDocumentVisibility);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
