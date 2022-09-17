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
  gap = 0,
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

  //console.log(popoverRef.current?.getBoundingClientRect());

  useLayoutEffect(() => {
    if (!childRef.current || !popoverRef.current) return;

    const {
      top: childTop,
      left: childLeft,
      width: childWidth,
      height: childHeight,
    } = childRef.current.getBoundingClientRect();

    const popoverWidth = popoverRef.current.offsetWidth;
    const popoverHeight = popoverRef.current.offsetHeight;

    const positions: Record<PlacementType, CoordsType> = {
      top: {
        top: childTop - popoverHeight - gap,
        left: childLeft + (childWidth - popoverWidth) / 2,
      },
      right: {
        top: childTop + (childHeight - popoverHeight) / 2,
        left: childLeft + childWidth + gap,
      },
      bottom: {
        top: childTop + childHeight + gap,
        left: childLeft + (childWidth - popoverWidth) / 2,
      },
      left: {
        top: childTop + (childHeight - popoverHeight) / 2,
        left: childLeft - popoverWidth - gap,
      },
    };

    setCoords(positions[placement]);
  }, [placement, isOpen, gap]);

  return (
    <>
      <Container className={className} {...openProps} ref={childRef}>
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
