import { FunctionComponent, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import styled, { css, keyframes } from "styled-components";
import { SIZES, ANIMATION_TIME } from "./Modal.constants";
import { SizeType } from "./Modal.types";
import { Icon } from "@/components";
import { theme } from "@/components/App";
import { useDisableScroll, useOutsideClick, useKeyPress, useMediaQuery } from "@/hooks";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: SizeType;
  closeOnInteractions?: boolean;
  isUnmounting?: boolean;
  className?: string;
};

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  isOpen,
  onClose,
  size = "sm",
  closeOnInteractions = true,
  isUnmounting = false,
  className,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useDisableScroll(isOpen);

  useOutsideClick({
    ref: contentRef,
    handler: onClose,
    enabled: isOpen && closeOnInteractions,
  });

  useKeyPress({
    targetKey: "Escape",
    handler: onClose,
    enabled: isOpen && closeOnInteractions,
  });

  const isMobile = useMediaQuery(768);

  const fadeOut = isUnmounting && !isMobile;

  if (!isOpen) return null;

  const Component = (
    <Backdrop isOpen={isOpen} fadeOut={fadeOut} className={className}>
      <Content size={size} ref={contentRef} fadeOut={fadeOut}>
        <CloseButton onClick={onClose}>
          <Icon icon={CloseOutline} color={theme.colors.grey} size={25} />
        </CloseButton>
        {children}
      </Content>
    </Backdrop>
  );

  return createPortal(Component, document.body);
};

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const Backdrop = styled.div<{ isOpen: boolean; fadeOut: boolean }>`
  position: fixed;
  font-family: inherit;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  z-index: 1;
  animation: ${fadeIn} ${ANIMATION_TIME}ms ease-out;
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transition: all ${ANIMATION_TIME}ms ease-out;
    `}
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.breakpoint("md")} {
    animation: none;
    align-items: baseline;
  }
`;

const Content = styled.div<{ size: SizeType; fadeOut: boolean }>`
  position: relative;
  width: ${({ size }) => SIZES[size]}px;
  min-height: 100px;
  padding: 2rem;
  animation: ${fadeInScale} ${ANIMATION_TIME}ms ease-out;
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transform: scale(0.9);
      transition: all ${ANIMATION_TIME}ms ease-out;
    `}
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoint("md")} {
    border-radius: 0;
    width: 100%;
    margin: 0;
    min-height: 100vh;
    animation: none;
    padding: 4rem 2rem;
  }
`;

const CloseButton = styled.button`
  line-height: 0;
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px;
  border-radius: 50px;
  transition: background-color ${ANIMATION_TIME}ms linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
