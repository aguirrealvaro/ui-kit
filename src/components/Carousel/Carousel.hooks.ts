import { RefObject, useEffect, useState } from "react";

export const useDisableRightArrow = (
  translate: number,
  carouselRef: RefObject<HTMLDivElement>
): boolean => {
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    const carouselWidth = carouselRef.current?.scrollWidth || 0;
    const clientWidth = carouselRef.current?.clientWidth || 0;
    setDisabled(translate === carouselWidth - clientWidth);
  }, [translate, carouselRef]);

  return disabled;
};
