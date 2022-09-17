import { FunctionComponent, ReactNode, useRef, useState, useEffect } from "react";
import styled, { css, keyframes, FlattenSimpleInterpolation } from "styled-components";
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

export const Popover2: FunctionComponent<PopoverProps> = ({
  children,
  content,
  placement = "bottom",
  trigger = "hover",
  gap = 0,
  hasChildrenWidth = false,
  className,
}) => {
  const childRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<FlattenSimpleInterpolation | undefined>(undefined);

  const { isOpen, onOpen, onClose, onToggle, isUnmounting } = useDisclosure({
    timeout: ANIMATION_TIME,
  });

  const openProps = {
    ...(trigger === "hover"
      ? { onMouseEnter: onOpen, onMouseLeave: onClose }
      : { onClick: onToggle }),
  };

  /* useOutsideClick({
    ref: popoverRef,
    handler: onClose,
    enabled: isOpen && trigger === "click",
  }); */

  useEffect(() => {
    if (!popoverRef.current) return;

    const popoverWidth = popoverRef.current.offsetWidth;
    const popoverHeight = popoverRef.current.offsetHeight;

    const styles: Record<PlacementType, FlattenSimpleInterpolation> = {
      top: css`
        top: -${popoverHeight}px;
        left: 50%;
        transform: translateX(-50%);
      `,
      right: css`
        top: 50%;
        right: -${popoverWidth}px;
        transform: translateY(-50%);
      `,
      bottom: css`
        bottom: -${popoverHeight}px;
        left: 50%;
        transform: translateX(-50%);
      `,
      left: css`
        top: 50%;
        left: -${popoverWidth}px;
        transform: translateY(-50%);
      `,
    };

    setCoords(styles[placement]);
  }, [placement, isOpen]);

  return (
    <Container>
      <div className={className} {...openProps} ref={childRef}>
        {children}
      </div>
      {isOpen && (
        <Content ref={popoverRef} fadeOut={isUnmounting} coords={coords}>
          {content}
        </Content>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const Content = styled.div<{
  fadeOut: boolean;
  coords: FlattenSimpleInterpolation | undefined;
}>`
  position: absolute;
  animation: ${fadeInScale} ${ANIMATION_TIME}ms ease-out;
  ${({ coords }) => {
    if (coords) return coords;
  }};
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transform: scale(0.9);
      transition: all ${ANIMATION_TIME}ms ease-out;
    `};
`;
