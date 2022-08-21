import { useEffect, useState } from "react";

type UseAnimationEndReturn = {
  render: boolean;
  onAnimationEnd: () => void;
};

export const useAnimationEnd = (show: boolean): UseAnimationEndReturn => {
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return { render, onAnimationEnd };
};
