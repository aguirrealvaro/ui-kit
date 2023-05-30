import {
  FunctionComponent,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
  isValidElement,
  cloneElement,
  ReactElement,
} from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { PopoverPositionType, PopoverTriggerType } from "./Popper.types";
import { theme } from "@/css";
import { useDisclosure, useOutsideClick } from "@/hooks";

type PopperProps = {
  children: ReactNode;
  trigger: ReactNode;
  position: PopoverPositionType;
  triggerMode?: PopoverTriggerType;
  withTriggerWidth?: boolean;
  gap?: number;
};

type CoordsType = {
  top: number;
  left: number;
};

const Popper: FunctionComponent<PopperProps> = ({
  children,
  trigger,
  position,
  triggerMode = "hover",
  gap = 0,
  withTriggerWidth = false,
}) => {
  const transitionTime = theme.transitions.durations.normal;

  const triggerRef = useRef<HTMLDivElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<CoordsType | undefined>(undefined);
  const [triggerWidth, setTriggerWidth] = useState<number | undefined>(undefined);

  const { isOpen, onOpen, onClose, onToggle, isUnmounting } = useDisclosure({
    timeout: transitionTime,
    closeOnResize: true,
  });

  useOutsideClick({
    ref: popperRef,
    handler: onClose,
    enabled: isOpen && triggerMode === "click",
  });

  // Close popover if stayed open  (fast move)
  useEffect(() => {
    if (!isOpen || triggerMode === "click") return;

    const listener = (e: MouseEvent | TouchEvent) => {
      if (
        !triggerRef.current?.contains(e.target as Node) &&
        !popperRef.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousemove", listener);
    return () => {
      document.removeEventListener("mousemove", listener);
    };
  }, [isOpen, onClose, triggerMode]);

  useLayoutEffect(() => {
    if (!triggerRef.current || !popperRef.current) return;

    const {
      top: triggerTop,
      left: triggerLeft,
      width: triggerWidth,
      height: triggerHeight,
    } = triggerRef.current.getBoundingClientRect();

    const popoverWidth = popperRef.current.offsetWidth;
    const popoverHeight = popperRef.current.offsetHeight;

    const positions: Record<PopoverPositionType, CoordsType> = {
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

  useLayoutEffect(() => {
    if (!triggerRef.current || !withTriggerWidth) return;
    setTriggerWidth(triggerRef.current.offsetWidth);
  }, [withTriggerWidth]);

  const openProps = {
    ...(triggerMode === "hover" ? { onMouseEnter: onOpen } : { onClick: onToggle }),
  };

  const triggerComponent = (() => {
    if (!isValidElement(trigger)) return null;
    return cloneElement(trigger as ReactElement, {
      "aria-expanded": isOpen,
      ref: triggerRef,
      ...openProps,
    });
  })();

  return (
    <>
      {triggerComponent}
      {isOpen &&
        createPortal(
          <Content
            ref={popperRef}
            $isOpen={isOpen}
            $isUnmounting={isUnmounting}
            $coords={coords}
            $triggerWidth={triggerWidth}
            $transitionTime={transitionTime}
          >
            {children}
          </Content>,
          document.body
        )}
    </>
  );
};

export { Popper, type PopperProps };

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.9);}
`;

const Content = styled.div<{
  $isOpen: boolean;
  $isUnmounting: boolean;
  $coords: CoordsType | undefined;
  $triggerWidth: number | undefined;
  $transitionTime: number;
}>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.popover};
  ${({ $coords }) => {
    if ($coords) {
      const { top, left } = $coords;
      return css`
        top: ${top + window.scrollY}px;
        left: ${left + window.scrollX}px;
      `;
    }
  }};

  animation-duration: ${({ $transitionTime }) => $transitionTime}ms;
  animation-timing-function: ${({ theme }) => theme.transitions.timings.in};
  animation-fill-mode: forwards;
  animation-name: ${({ $isOpen, $isUnmounting }) => {
    if ($isOpen && !$isUnmounting) return fadeIn;
    if ($isUnmounting) return fadeOut;
  }};

  ${({ $triggerWidth }) => {
    if ($triggerWidth) {
      return css`
        width: ${$triggerWidth}px;
      `;
    }
  }};
`;
