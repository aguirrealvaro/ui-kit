import { RefObject, useEffect, useMemo, useState } from "react";

export const useIntersectingViewport = <T extends HTMLElement>(ref: RefObject<T>): boolean => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = useMemo(() => {
    return new IntersectionObserver(([entry]) => {
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
