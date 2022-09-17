import { FunctionComponent, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";
import { PlacementType, TriggerType } from "./Popover.types";
import { getPopoverPosition } from "./Popover.utils";
import { useDisclosure, useOutsideClick } from "@/hooks";

const ANIMATION_TIME = 150;

export type PopoverProps = {
  children?: ReactNode;
  content: ReactNode;
  placement?: PlacementType;
  trigger?: TriggerType;
  className?: string;
  gap?: number;
};

export const Popover: FunctionComponent<PopoverProps> = ({
  children,
  content,
  placement = "bottom",
  trigger = "hover",
  gap = 0,
  className,
}) => {
  const childRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!childRef.current || !popoverRef.current) return;

    const { top, left } = getPopoverPosition(
      childRef.current,
      popoverRef.current,
      placement,
      gap
    );

    if (!popoverRef.current) return;

    popoverRef.current.style.top = `${top}px`;

    popoverRef.current.style.left = `${left}px`;
  }, [placement, isOpen, gap]);

  return (
    <>
      <Container className={className} {...openProps} ref={childRef}>
        {children}
      </Container>
      {isOpen &&
        createPortal(
          <Content ref={popoverRef} fadeOut={isUnmounting}>
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
