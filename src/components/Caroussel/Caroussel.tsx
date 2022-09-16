import { FunctionComponent, Children, useState, useRef, useEffect, ReactNode } from "react";
import styled from "styled-components";
import { useDisableRightArrow } from "./Caroussel.hooks";
import { DirectionType } from "./Caroussel.types";
import { Arrow } from "./components";

const ANIMATION_TIME = 400;

type CarousselProps = {
  children: ReactNode;
  gap?: number;
  callbackLeft?: () => void;
  callbackRight?: () => void;
  fullWidth?: boolean;
};

export const Caroussel: FunctionComponent<CarousselProps> = ({
  children,
  gap = 16,
  callbackLeft,
  callbackRight,
  fullWidth = false,
}) => {
  const [translate, setTranslate] = useState<number>(0);
  const carousselRef = useRef<HTMLDivElement>(null);
  const disabledRightArrow = useDisableRightArrow(translate, carousselRef);

  const parsedGap = fullWidth ? 0 : gap;

  const handleArrow = (direction: DirectionType) => {
    const carousselWidth = carousselRef.current?.scrollWidth || 0;
    const clientWidth = carousselRef.current?.clientWidth || 0;

    if (direction === "left") {
      const result = translate - clientWidth;
      setTranslate(result <= 0 ? 0 : result);
      callbackLeft?.();
    } else {
      const result = translate + clientWidth;
      const limit = carousselWidth - clientWidth;
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

  return (
    <Container role="slider">
      <Overflow>
        <SlideContainer translate={translate} ref={carousselRef} gap={parsedGap}>
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
  transition: transform ${ANIMATION_TIME}ms ease;
  gap: ${({ gap }) => `${gap}px`};
  align-items: center;
`;

const Slide = styled.div<{ fullWidth: boolean }>`
  min-width: ${({ fullWidth }) => fullWidth && "100%"};
`;
