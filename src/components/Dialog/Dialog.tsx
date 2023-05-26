import {
  FunctionComponent,
  useRef,
  ReactNode,
  isValidElement,
  cloneElement,
  ReactElement,
} from "react";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";
import { X } from "lucide-react";
import styled, { css, keyframes } from "styled-components";
import { DialogSizeType } from "./Dialog.types";
import { IconButton, Icon } from "@/components";
import { useDisableScroll, useKeyPress, useDisclosure, useOutsideClick } from "@/hooks";

export type DialogProps = {
  children: ReactNode;
  id: string;
  trigger: ReactNode;
  size?: DialogSizeType;
  closeOnInteractions?: boolean;
};

export const Dialog: FunctionComponent<DialogProps> = ({
  children,
  id,
  trigger,
  size = "sm",
  closeOnInteractions = true,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const { isOpen, onOpen, onClose, isUnmounting } = useDisclosure();

  useDisableScroll(isOpen);

  useOutsideClick({
    ref: contentRef,
    handler: onClose,
    //enabled: isOpen && closeOnInteractions,
    enabled: false, //Does not work with Focus trap
  });

  useKeyPress({
    targetKey: "Escape",
    handler: onClose,
    enabled: isOpen && closeOnInteractions,
  });

  const dialogId = `${id}-dialog`;

  const triggerComponent = (() => {
    if (!isValidElement(trigger)) return null;
    return cloneElement(trigger as ReactElement, {
      onClick: onOpen,
      "aria-expanded": isOpen,
      "aria-haspopup": "dialog",
      "aria-controls": dialogId,
    });
  })();

  return (
    <>
      {triggerComponent}
      {isOpen &&
        createPortal(
          <Backdrop $isUnmounting={isUnmounting}>
            <FocusTrap>
              <Content
                id={dialogId}
                $size={size}
                ref={contentRef}
                $isUnmounting={isUnmounting}
                role="dialog"
                aria-modal={true}
                aria-labelledby={id}
              >
                <CloseButtonWrapper>
                  <IconButton onClick={onClose}>
                    <Icon icon={X} />
                  </IconButton>
                </CloseButtonWrapper>
                {children}
              </Content>
            </FocusTrap>
          </Backdrop>,
          document.body
        )}
    </>
  );
};

const fadeInBackdrop = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const fadeOutBackdrop = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

const fadeInDialog = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const fadeOutDialog = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.9);}
`;

const Backdrop = styled.div<{ $isUnmounting: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.transparencies.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.dialog};

  animation-name: ${fadeInBackdrop};
  animation-duration: ${({ theme }) => theme.transitions.durations.normal}ms;
  animation-timing-function: ${({ theme }) => theme.transitions.timings.in};
  animation-fill-mode: forwards;

  ${({ $isUnmounting, theme }) => {
    if ($isUnmounting) {
      return css`
        animation-name: ${fadeOutBackdrop};
        animation-duration: ${theme.transitions.durations.normal}ms;
        animation-timing-function: ${theme.transitions.timings.in};
        animation-fill-mode: forwards;
      `;
    }
  }};
`;

const Content = styled.div<{ $size: DialogSizeType; $isUnmounting: boolean }>`
  position: relative;
  width: ${({ $size }) => {
    const sizes: Record<DialogSizeType, string> = {
      xs: "20rem",
      sm: "28rem",
      md: "36rem",
      lg: "42rem",
    };
    return sizes[$size];
  }};
  min-height: ${({ theme }) => theme.spacing[28]};
  max-height: 80vh;
  background-color: ${({ theme }) => theme.vars.bgSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  margin: 0 1rem;

  animation-name: ${fadeInDialog};
  animation-duration: ${({ theme }) => theme.transitions.durations.normal}ms;
  animation-timing-function: ${({ theme }) => theme.transitions.timings.in};
  animation-fill-mode: forwards;

  ${({ $isUnmounting, theme }) => {
    if ($isUnmounting) {
      return css`
        animation-name: ${fadeOutDialog};
        animation-duration: ${theme.transitions.durations.normal}ms;
        animation-timing-function: ${theme.transitions.timings.in};
        animation-fill-mode: forwards;
      `;
    }
  }};
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[1.5]};
  right: ${({ theme }) => theme.spacing[1.5]};
`;
