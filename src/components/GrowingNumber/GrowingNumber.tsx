import { FunctionComponent, useEffect, useRef, useState } from "react";
import { useIntersectingViewport } from "@/hooks";

type GrowingNumber = {
  number: string;
  duration?: string;
};

export const GrowingNumber: FunctionComponent<GrowingNumber> = ({
  number,
  duration = "2",
}) => {
  const [count, setCount] = useState<string>("0");

  const ref = useRef<HTMLSpanElement>(null);

  const isIntersecting = useIntersectingViewport<HTMLSpanElement>(ref);

  useEffect(() => {
    if (!isIntersecting) return;

    let start = 0;
    const end = parseInt(number.substring(0, 3));

    if (start === end) return;

    const totalMilSecDur = parseInt(duration);
    const incrementTime = (totalMilSecDur / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [isIntersecting, number, duration]);

  return <span ref={ref}>{count}</span>;
};
