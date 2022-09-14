import { useEffect } from "react";

export const useTabChange = (handler: () => void): void => {
  useEffect(() => {
    const handleDocumentVisibility = () => {
      if (!document.hidden) handler();
    };

    document.addEventListener("visibilitychange", handleDocumentVisibility);
    return () => document.removeEventListener("visibilitychange", handleDocumentVisibility);
  }, [handler]);
};
