import {
  FunctionComponent,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { PositionType, TriggerType } from "./Popover.types";
import { useDisclosure, useOutsideClick } from "@/hooks";

const ANIMATION_TIME = 150;

export type PopoverProps = {
  children?: ReactNode;
  content: ReactNode;
  position?: PositionType;
  trigger?: TriggerType;
  className?: string;
  withTriggerWidth?: boolean;
  gap?: number;
};

type CoordsType = {
  top: number;
  left: number;
};

export const Popover: FunctionComponent<PopoverProps> = ({
  children,
  content,
  position = "bottom",
  trigger = "hover",
  gap = 0,
  //withTriggerWidth = false,
  className,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<CoordsType | undefined>(undefined);

  const { isOpen, onOpen, onClose, onToggle, isUnmounting } = useDisclosure({
    timeout: ANIMATION_TIME,
  });

  const openProps = {
    ...(trigger === "hover"
      ? { onMouseEnter: onOpen, onMouseLeave: onClose }
      : { onClick: onToggle }),
  };

  useOutsideClick({
    ref: popoverRef,
    handler: onClose,
    enabled: isOpen && trigger === "click",
  });

  // Close popover if stayed open
  useEffect(() => {
    if (!isOpen) return;

    const listener = (e: MouseEvent | TouchEvent) => {
      if (!triggerRef.current?.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousemove", listener);

    return () => {
      document.removeEventListener("mousemove", listener);
    };
  }, [isOpen, onClose]);

  useLayoutEffect(() => {
    if (!triggerRef.current || !popoverRef.current) return;

    const {
      top: triggerTop,
      left: triggerLeft,
      width: triggerWidth,
      height: triggerHeight,
    } = triggerRef.current.getBoundingClientRect();

    const popoverWidth = popoverRef.current.offsetWidth;
    const popoverHeight = popoverRef.current.offsetHeight;

    const positions: Record<PositionType, CoordsType> = {
      top: {
        top: triggerTop - popoverHeight - gap,
        left: triggerLeft + (triggerWidth - popoverWidth) / 2,
      },
      right: {
        top: triggerTop + (triggerHeight - popoverHeight) / 2,
        left: triggerLeft + triggerWidth + gap,
      },
      bottom: {
        top: triggerTop + triggerHeight + gap,
        left: triggerLeft + (triggerWidth - popoverWidth) / 2,
      },
      left: {
        top: triggerTop + (triggerHeight - popoverHeight) / 2,
        left: triggerLeft - popoverWidth - gap,
      },
      "top-left": {
        top: triggerTop - popoverHeight - gap,
        left: triggerLeft,
      },
      "top-right": {
        top: triggerTop - popoverHeight - gap,
        left: triggerLeft + triggerWidth - popoverWidth,
      },
      "right-top": {
        top: triggerTop,
        left: triggerLeft + triggerWidth + gap,
      },
      "right-bottom": {
        top: triggerTop + triggerHeight - popoverHeight,
        left: triggerLeft + triggerWidth + gap,
      },
      "bottom-left": {
        top: triggerTop + triggerHeight + gap,
        left: triggerLeft,
      },
      "bottom-right": {
        top: triggerTop + triggerHeight + gap,
        left: triggerLeft + triggerWidth - popoverWidth,
      },
      "left-top": {
        top: triggerTop,
        left: triggerLeft - popoverWidth - gap,
      },
      "left-bottom": {
        top: triggerTop + triggerHeight - popoverHeight,
        left: triggerLeft - popoverWidth - gap,
      },
    };

    setCoords(positions[position]);
  }, [position, isOpen, gap]);

  return (
    <>
      <Container className={className} {...openProps} ref={triggerRef}>
        {children}
      </Container>
      {isOpen &&
        createPortal(
          <Content ref={popoverRef} fadeOut={isUnmounting} coords={coords}>
            {content}
          </Content>,
          document.body
        )}
    </>
  );
};

const Container = styled.div`
  align-self: baseline;
  display: inline-block;
`;

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

/* const fadeInDown = keyframes`
  from { opacity: 0; transform: translateY(-5%); }
  to { opacity: 1; transform: translateY(0);}
`; */

const Content = styled.div<{
  fadeOut: boolean;
  coords: CoordsType | undefined;
}>`
  position: absolute;
  animation: ${fadeInScale} ${ANIMATION_TIME}ms ease-out;
  ${({ coords }) => {
    if (coords) {
      const { top, left } = coords;
      return css`
        top: ${top + window.scrollY}px;
        left: ${left + window.scrollX}px;
      `;
    }
  }};
  ${({ fadeOut }) => {
    if (fadeOut) {
      return css`
        opacity: 0;
        transform: scale(0.9);
        transition: all ${ANIMATION_TIME}ms ease-out;

        /* opacity: 0;
        transform: translateY(-5%);
        transition: opacity ${ANIMATION_TIME}ms ease-out,
          transform ${ANIMATION_TIME}ms ease-out; */
      `;
    }
  }}
`;
