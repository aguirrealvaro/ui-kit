import { useEffect } from "react";

export const useTabChange = (callback: () => void): void => {
  useEffect(() => {
    const handleDocumentVisibility = () => {
      if (!document.hidden) callback();
    };

    document.addEventListener("visibilitychange", handleDocumentVisibility);
    return () => document.removeEventListener("visibilitychange", handleDocumentVisibility);
  }, [callback]);
};
