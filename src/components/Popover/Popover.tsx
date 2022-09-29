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
import { PopoverPositionType, PopoverTriggerType } from "./Popover.types";
import { useDisclosure, useOutsideClick, useTheme } from "@/hooks";

export type PopoverProps = {
  children?: ReactNode;
  content: ReactNode;
  position: PopoverPositionType;
  trigger?: PopoverTriggerType;
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
  position,
  trigger = "hover",
  gap = 0,
  withTriggerWidth = false,
}) => {
  const { theme } = useTheme();
  const transitionTime = theme.transitions.durations.normal;

  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<CoordsType | undefined>(undefined);
  const [triggerWidth, setTriggerWidth] = useState<number | undefined>(undefined);

  const { isOpen, onOpen, onClose, onToggle, isUnmounting } = useDisclosure({
    timeout: transitionTime,
    closeOnResize: true,
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

  // Close popover if stayed open  (fast move)
  useEffect(() => {
    if (!isOpen || trigger === "click") return;

    const listener = (e: MouseEvent | TouchEvent) => {
      if (!triggerRef.current?.contains(e.target as Node)) onClose();
    };

    document.addEventListener("mousemove", listener);
    return () => {
      document.removeEventListener("mousemove", listener);
    };
  }, [isOpen, onClose, trigger]);

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

  return (
    <>
      <Children {...openProps} ref={triggerRef}>
        {children}
      </Children>
      {isOpen &&
        createPortal(
          <Content
            ref={popoverRef}
            fadeOut={isUnmounting}
            coords={coords}
            triggerWidth={triggerWidth}
            transitionTime={transitionTime}
          >
            {content}
          </Content>,
          document.body
        )}
    </>
  );
};

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const Children = styled.div`
  display: inline-block;
`;

const Content = styled.div<{
  fadeOut: boolean;
  coords: CoordsType | undefined;
  triggerWidth: number | undefined;
  transitionTime: number;
}>`
  position: absolute;
  animation: ${fadeInScale} ${({ transitionTime }) => transitionTime}ms
    ${({ theme }) => theme.transitions.timings.in};
  ${({ coords }) => {
    if (coords) {
      const { top, left } = coords;
      return css`
        top: ${top + window.scrollY}px;
        left: ${left + window.scrollX}px;
      `;
    }
  }};
  ${({ fadeOut, transitionTime }) => {
    if (fadeOut) {
      return css`
        opacity: 0;
        transform: scale(0.9);
        transition: all ${transitionTime}ms ${({ theme }) => theme.transitions.timings.in};
      `;
    }
  }};
  ${({ triggerWidth }) => {
    if (triggerWidth) {
      return css`
        width: ${triggerWidth}px;
      `;
    }
  }};
`;
