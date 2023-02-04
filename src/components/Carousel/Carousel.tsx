import {
  FunctionComponent,
  Children,
  useState,
  useRef,
  useEffect,
  ReactNode,
  KeyboardEvent,
} from "react";
import styled from "styled-components";
import { useDisableRightArrow } from "./Carousel.hooks";
import { CarouselDirectionType } from "./Carousel.types";
import { Arrow } from "./components";

type CarouselProps = {
  children: ReactNode;
  gap?: number;
  callbackLeft?: () => void;
  callbackRight?: () => void;
  fullWidth?: boolean;
};

export const Carousel: FunctionComponent<CarouselProps> = ({
  children,
  gap = 16,
  callbackLeft,
  callbackRight,
  fullWidth = false,
}) => {
  const [translate, setTranslate] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const disabledRightArrow = useDisableRightArrow(translate, carouselRef);

  const parsedGap = fullWidth ? 0 : gap;

  const handleArrow = (direction: CarouselDirectionType) => {
    const carouselWidth = carouselRef.current?.scrollWidth || 0;
    const clientWidth = carouselRef.current?.clientWidth || 0;

    if (direction === "left") {
      const result = translate - clientWidth;
      setTranslate(result <= 0 ? 0 : result);
      callbackLeft?.();
    } else {
      const result = translate + clientWidth;
      const limit = carouselWidth - clientWidth;
      setTranslate(result >= limit ? limit : result);
      callbackRight?.();
    }
  };

  useEffect(() => {
    if (!translate) return;
    const resetTranslate = () => setTranslate(0);
    window.addEventListener("resize", resetTranslate);
    return () => window.removeEventListener("resize", resetTranslate);
  }, [translate]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      handleArrow("left");
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      handleArrow("right");
    }
  };

  return (
    <Container role="slider" onKeyDown={handleKeyDown} tabIndex={0}>
      <Overflow>
        <SlideContainer translate={translate} ref={carouselRef} gap={parsedGap}>
          {Children.map(children, (child) => (
            <Slide fullWidth={fullWidth}>{child}</Slide>
          ))}
        </SlideContainer>
      </Overflow>
      <Arrow direction="left" handleArrow={handleArrow} disabled={translate === 0} />
      <Arrow direction="right" handleArrow={handleArrow} disabled={disabledRightArrow} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Overflow = styled.div`
  overflow: hidden;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SlideContainer = styled.div<{ translate?: any; gap: number }>`
  display: flex;
  transform: ${({ translate }) => `translateX(-${translate}px)`};
  transition: transform ${({ theme }) => theme.transitions.durations.slow}ms
    ${({ theme }) => theme.transitions.timings.in};
  gap: ${({ gap }) => `${gap}px`};
  align-items: center;
`;

const Slide = styled.div<{ fullWidth: boolean }>`
  min-width: ${({ fullWidth }) => fullWidth && "100%"};
`;
