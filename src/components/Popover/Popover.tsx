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
import { PopoverPositionType, PopoverTriggerType } from "./Popover.types";
import { useDisclosure, useOutsideClick, useTheme } from "@/hooks";

export type PopoverProps = {
  children: ReactNode;
  content: ReactNode;
  contentId: string;
  position: PopoverPositionType;
  trigger?: PopoverTriggerType;
  withTriggerWidth?: boolean;
  gap?: number;
  popUpType?: "menu" | "listbox" | "tree" | "grid" | "dialog";
};

type CoordsType = {
  top: number;
  left: number;
};

export const Popover: FunctionComponent<PopoverProps> = ({
  children,
  content,
  contentId,
  position,
  trigger = "hover",
  gap = 0,
  withTriggerWidth = false,
  popUpType,
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

  useOutsideClick({
    ref: popoverRef,
    handler: onClose,
    enabled: isOpen && trigger === "click",
  });

  // Close popover if stayed open  (fast move)
  useEffect(() => {
    if (!isOpen || trigger === "click") return;

    const listener = (e: MouseEvent | TouchEvent) => {
      if (
        !triggerRef.current?.contains(e.target as Node) &&
        !popoverRef.current?.contains(e.target as Node)
      ) {
        onClose();
      }
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

  const openProps = {
    ...(trigger === "hover" ? { onMouseEnter: onOpen } : { onClick: onToggle }),
  };

  const hasPopup = trigger === "click";

  const popUpProps = hasPopup
    ? {
        "aria-expanded": isOpen,
        "aria-haspoup": popUpType || true,
        "aria-controls": contentId,
      }
    : undefined;

  const triggerComponent = (() => {
    if (!isValidElement(children)) return null;
    return cloneElement(children as ReactElement, {
      ref: triggerRef,
      ...openProps,
      ...popUpProps,
    });
  })();

  return (
    <>
      {triggerComponent}
      {isOpen &&
        createPortal(
          <Content
            id={contentId}
            ref={popoverRef}
            fadeOut={isUnmounting}
            coords={coords}
            triggerWidth={triggerWidth}
            transitionTime={transitionTime}
            {...(hasPopup && popUpType && { role: popUpType })}
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
