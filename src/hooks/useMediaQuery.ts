import { useState, useEffect } from "react";

export const useMediaQuery = (size = 900): boolean => {
  const [isWindowResize, setIsWindowResize] = useState<boolean>(window.innerWidth <= size);

  useEffect(() => {
    const updateWindowWidth = () => {
      if (!isWindowResize && window.innerWidth <= size) setIsWindowResize(true);
      else if (isWindowResize && window.innerWidth > size) setIsWindowResize(false);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isWindowResize, size]);

  return isWindowResize;
};
