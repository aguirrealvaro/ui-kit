import { useRef, useEffect } from "react";

export const useIsFirstRender = (): boolean => {
  const isMountRef = useRef<boolean>(true);

  useEffect(() => {
    isMountRef.current = false;
  }, []);

  return isMountRef.current;
};
