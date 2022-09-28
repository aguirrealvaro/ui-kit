import { FunctionComponent, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import styled, { css, keyframes } from "styled-components";
import { MODAL_SIZES } from "./Modal.constants";
import { ModalSizeType } from "./Modal.types";
import { Icon, IconButton } from "@/components";
import { useDisableScroll, useOutsideClick, useKeyPress, useTheme } from "@/hooks";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: ModalSizeType;
  closeOnInteractions?: boolean;
  isUnmounting?: boolean;
};

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  isOpen,
  onClose,
  size = "sm",
  closeOnInteractions = true,
  isUnmounting = false,
}) => {
  const { theme } = useTheme();

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

  const modalSize = MODAL_SIZES[size];

  if (!isOpen) return null;

  const Component = (
    <Backdrop isOpen={isOpen} fadeOut={isUnmounting}>
      <Content size={modalSize} ref={contentRef} fadeOut={isUnmounting} role="dialog">
        <CloseButtonWrapper>
          <IconButton onClick={onClose}>
            <Icon icon={CloseOutline} color={theme.assets.neutral} size={25} />
          </IconButton>
        </CloseButtonWrapper>
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
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  animation: ${fadeIn} ${({ theme }) => theme.transitions.normal}ms ease-out;
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transition: all ${({ theme }) => theme.transitions.normal}ms ease-out;
    `};
  background-color: ${({ theme }) => theme.transparencies.medium};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div<{ size: number; fadeOut: boolean }>`
  position: relative;
  width: ${({ size }) => size}px;
  min-height: 100px;
  max-height: 80vh;
  animation: ${fadeInScale} ${({ theme }) => theme.transitions.normal}ms ease-out;
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transform: scale(0.9);
      transition: all ${({ theme }) => theme.transitions.normal}ms ease-out;
    `}
  background-color: ${({ theme }) => theme.colors.grey[1]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
`;
