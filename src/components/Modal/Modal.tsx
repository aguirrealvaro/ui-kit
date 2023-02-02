import { FunctionComponent, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import FocusTrap from "focus-trap-react";
import styled, { css, keyframes } from "styled-components";
import { ModalSizeType } from "./Modal.types";
import { Icon, IconButton } from "@/components";
import { useDisableScroll, useOutsideClick, useKeyPress } from "@/hooks";

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

  if (!isOpen) return null;

  const Component = (
    <Backdrop isOpen={isOpen} fadeOut={isUnmounting}>
      <FocusTrap>
        <Content
          size={size}
          ref={contentRef}
          fadeOut={isUnmounting}
          role="dialog"
          aria-modal={true}
        >
          <CloseButtonWrapper>
            <IconButton onClick={onClose}>
              <Icon icon={CloseOutline} size={25} />
            </IconButton>
          </CloseButtonWrapper>
          {children}
        </Content>
      </FocusTrap>
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
  animation: ${fadeIn} ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.in};
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transition: all ${({ theme }) => theme.transitions.durations.normal}ms
        ${({ theme }) => theme.transitions.timings.in};
    `};
  background-color: ${({ theme }) => theme.transparencies.medium};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div<{ size: ModalSizeType; fadeOut: boolean }>`
  position: relative;
  width: ${({ size }) => {
    const sizes: Record<ModalSizeType, string> = {
      xs: "20rem",
      sm: "28rem",
      md: "36rem",
      lg: "42rem",
    };
    return sizes[size];
  }};
  min-height: ${({ theme }) => theme.sizes[28]};
  max-height: 80vh;
  animation: ${fadeInScale} ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.in};
  ${({ fadeOut }) =>
    fadeOut &&
    css`
      opacity: 0;
      transform: scale(0.9);
      transition: all ${({ theme }) => theme.transitions.durations.normal}ms
        ${({ theme }) => theme.transitions.timings.in};
    `}
  background-color: ${({ theme }) => theme.assets.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[1.5]};
  right: ${({ theme }) => theme.spacing[1.5]};
`;
