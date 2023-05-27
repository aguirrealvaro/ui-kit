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
import styled, { keyframes } from "styled-components";
import { DialogSizeType } from "./Dialog.types";
import { IconButton, Icon } from "@/components";
import { theme } from "@/css";
import { useDisableScroll, useKeyPress, useDisclosure, useOutsideClick } from "@/hooks";

const TRANSITION_TIME = theme.transitions.durations.normal;

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

  const { isOpen, onOpen, onClose, isUnmounting } = useDisclosure({
    timeout: TRANSITION_TIME,
  });

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
          <Backdrop $isUnmounting={isUnmounting} $isOpen={isOpen}>
            <FocusTrap>
              <Content
                id={dialogId}
                $size={size}
                ref={contentRef}
                $isUnmounting={isUnmounting}
                $isOpen={isOpen}
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

const Backdrop = styled.div<{ $isUnmounting: boolean; $isOpen: boolean }>`
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

  animation-duration: ${TRANSITION_TIME}ms;
  animation-timing-function: ${({ theme }) => theme.transitions.timings.in};
  animation-fill-mode: forwards;
  animation-name: ${({ $isOpen, $isUnmounting }) => {
    if ($isOpen && !$isUnmounting) return fadeInBackdrop;
    if ($isUnmounting) return fadeOutBackdrop;
  }};
`;

const Content = styled.div<{
  $size: DialogSizeType;
  $isUnmounting: boolean;
  $isOpen: boolean;
}>`
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

  animation-duration: ${TRANSITION_TIME}ms;
  animation-timing-function: ${({ theme }) => theme.transitions.timings.in};
  animation-fill-mode: forwards;
  animation-name: ${({ $isOpen, $isUnmounting }) => {
    if ($isOpen && !$isUnmounting) return fadeInDialog;
    if ($isUnmounting) return fadeOutDialog;
  }};
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[1.5]};
  right: ${({ theme }) => theme.spacing[1.5]};
`;
