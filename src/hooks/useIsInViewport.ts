import { RefObject, useEffect, useMemo, useState } from "react";

export const useIsInViewport = <T extends HTMLElement>(ref: RefObject<T>): boolean => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) => {
      //if (isIntersecting) return; // once is intersected, it wont be disabled again
      setIsIntersecting(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
