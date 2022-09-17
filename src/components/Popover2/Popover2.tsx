import { FunctionComponent, ReactNode, useRef } from "react";
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

  return (
    <Container>
      <div className={className} /*  {...openProps} */ ref={childRef}>
        {children}
      </div>
      {true && (
        <Content ref={popoverRef} fadeOut={isUnmounting}>
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
`;
