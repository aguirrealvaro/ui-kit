import { RefObject, useEffect, useState } from "react";

export const useDisableRightArrow = (
  translate: number,
  carousselRef: RefObject<HTMLDivElement>
): boolean => {
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    const carousselWidth = carousselRef.current?.scrollWidth || 0;
    const clientWidth = carousselRef.current?.clientWidth || 0;
    setDisabled(translate === carousselWidth - clientWidth);
  }, [translate, carousselRef]);

  return disabled;
};
