import { RefObject, useRef } from "react";

type UseScrollIntoViewReturn<T> = {
  ref: RefObject<T>;
  handleScroll: () => void;
};

export const useScrollIntoView = <T extends HTMLElement>(): UseScrollIntoViewReturn<T> => {
  const ref = useRef<T>(null);

  const handleScroll = () => {
    return ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { ref, handleScroll };
};
