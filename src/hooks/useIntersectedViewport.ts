import { RefObject, useEffect, useMemo, useState } from "react";

export const useIntersectedViewport = <T extends HTMLElement>(ref: RefObject<T>): boolean => {
  const [isIntersected, setIsIntersected] = useState<boolean>(false);

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) => {
      if (isIntersected) return; // once is intersected, it wont be disabled again
      setIsIntersected(entry.isIntersecting);
    });
  }, [isIntersected]);

  useEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersected;
};
