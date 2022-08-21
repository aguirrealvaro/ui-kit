import { useEffect, useState, RefObject } from "react";

type UseShowMoreReturnType = {
  showMore: boolean;
  showMoreEnabled: boolean;
  containerHeight: number;
  toggleShowMore: () => void;
};

export const useShowMore = (
  ref: RefObject<HTMLDivElement>,
  minHeight: number
): UseShowMoreReturnType => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [showMoreEnabled, setShowMoreEnabled] = useState<boolean>(false);

  const [containerHeight, setContainerHeight] = useState<number>(0);

  const toggleShowMore = () => setShowMore(!showMore);

  useEffect(() => {
    if (!ref.current) return;
    setContainerHeight(ref.current.scrollHeight);
    setShowMoreEnabled(ref.current.scrollHeight > minHeight);
  }, [minHeight, ref]);

  return {
    showMore,
    showMoreEnabled,
    containerHeight,
    toggleShowMore,
  };
};
