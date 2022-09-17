import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { getTooltipPosition } from "./getTooltipPosition";
import { PlacementType, TriggerType, CoordinatesType } from "./Tooltip.types";
import { useDisclosure, useOutsideClick } from "@/hooks";

const ANIMATION_TIME = 150;

export type TooltipProps = {
  children?: ReactNode;
  content: ReactNode;
  placement?: PlacementType;
  trigger?: TriggerType;
  className?: string;
};

export const Tooltip: FunctionComponent<TooltipProps> = ({
  children,
  content,
  placement = "bottom",
  trigger = "hover",
  className,
}) => {
  const childRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<CoordinatesType>({ top: 0, left: 0 });

  const { isOpen, onOpen, onClose, onToggle, isUnmounting } = useDisclosure({
    timeout: ANIMATION_TIME,
  });

  const openProps = {
    ...(trigger === "hover"
      ? { onMouseEnter: onOpen, onMouseLeave: onClose }
      : { onClick: onToggle }),
  };

  useOutsideClick({
    ref: tooltipRef,
    handler: onClose,
    enabled: isOpen && trigger === "click",
  });

  useEffect(() => {
    if (!childRef.current || !tooltipRef.current) return;

    const { left, top } = getTooltipPosition(
      childRef.current,
      tooltipRef.current,
      placement,
      16
    );

    if (!tooltipRef.current) return;

    tooltipRef.current.style.left = `${left}px`;
    tooltipRef.current.style.top = `${top}px`;
  }, [placement, isOpen]);

  return (
    <>
      <Container className={className} {...openProps} ref={childRef}>
        {children}
      </Container>
      {isOpen &&
        createPortal(
          <Content ref={tooltipRef} fadeOut={isUnmounting}>
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
}>`
  position: absolute;
  animation: ${fadeInScale} ${ANIMATION_TIME}ms ease-out;
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transform: scale(0.9);
      transition: all ${ANIMATION_TIME}ms ease-out;
    `};
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  font-size: 0.8rem;
`;
