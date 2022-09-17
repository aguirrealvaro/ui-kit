import { FunctionComponent, ReactNode, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { PlacementType, TriggerType } from "./Popover2.types";
import { useDisclosure, useOutsideClick } from "@/hooks";

const ANIMATION_TIME = 150;

export type PopoverProps = {
  children?: ReactNode;
  content: ReactNode;
  placement?: PlacementType;
  trigger?: TriggerType;
  className?: string;
  hasChildrenWidth?: boolean;
  gap?: number;
};

type CoordsType = {
  top: number;
  left: number;
};

export const Popover2: FunctionComponent<PopoverProps> = ({
  children,
  content,
  placement = "bottom",
  trigger = "hover",
  //gap = 0,
  //hasChildrenWidth = false,
  className,
}) => {
  const childRef = useRef<HTMLDivElement>(null);
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

  useLayoutEffect(() => {
    console.log(1);

    if (!childRef.current || !popoverRef.current) return;
    console.log(2);

    const bounding = childRef.current.getBoundingClientRect();

    const hoverWidth = popoverRef.current.offsetWidth;
    const hoverHeight = popoverRef.current.offsetHeight;

    if (!bounding) return;

    const gapX = 7;
    const gapY = 5;

    const { x, y, width, height } = bounding;

    const verticalTop = x + width / 2 - hoverWidth / 2;
    const horizontalLeft = y - height / 2 + window.scrollY;

    /* const positions: Record<PlacementType, CoordsType> = {
      top: { top: verticalTop, left: y - hoverHeight - gapY + window.scrollY },
      right: { top: x + width + gapX + window.scrollX, left: horizontalLeft },
      bottom: { top: verticalTop, left: y + height + gapY + window.scrollY },
      left: { top: x - hoverWidth - gapX + window.scrollX, left: horizontalLeft },
    }; */

    const positions: Record<PlacementType, CoordsType> = {
      top: { top: 0, left: 0 },
      right: { top: 0, left: 0 },
      bottom: { top: 0, left: 0 },
      left: { top: 0, left: 0 },
    };

    setCoords(positions[placement]);
  }, [childRef, placement, isOpen]);

  return (
    <>
      <Container className={className} {...openProps} ref={childRef}>
        {children}
      </Container>
      {true &&
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
        top: ${top}px;
        left: ${left}px;
      `;
    }
  }};
  ${({ fadeOut }) => {
    if (fadeOut) {
      return css`
        opacity: 0;
        transform: scale(0.9);
        transition: all ${ANIMATION_TIME}ms ease-out;
      `;
    }
  }}
`;
