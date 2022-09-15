import { FunctionComponent, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANIMATION_TIME, DURATION_TIME } from "./Toast.contants";
import { ToastVariantType, ToastProps } from "./Toast.types";
import { useToast } from "./useToast";

export const Toast: FunctionComponent<ToastProps> = ({ children, id, permanent, variant }) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timeoutRef = useRef<number>(0);

  const toast = useToast();

  useEffect(() => {
    if (permanent) return;

    timeoutRef.current = window.setTimeout(() => {
      setIsClosing(true);
      timeoutRef.current = window.setTimeout(() => {
        setIsClosing(false);
        toast.remove(id);
      }, ANIMATION_TIME);
    }, DURATION_TIME);
  }, [id, toast, permanent]);

  const closeToast = () => {
    setIsClosing(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      toast.remove(id);
    }, ANIMATION_TIME);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Container onClick={closeToast} isClosing={isClosing} variant={variant}>
      {children}
    </Container>
  );
};

const translate = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateX(0); }
`;

const Container = styled.div<{ isClosing: boolean; variant: ToastVariantType | undefined }>`
  background-color: ${({ theme, variant }) => {
    if (!variant) return "black";
    const backgroundColor: Record<ToastVariantType, string> = {
      default: "blue",
      positive: "green",
      warning: "yellow",
      negative: "red",
      neutral: "black",
    };

    return theme.colors[backgroundColor[variant]];
  }};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  animation: ${translate} ${ANIMATION_TIME}ms linear;
  ${({ isClosing }) =>
    isClosing &&
    css`
      transform: translateY(-100%);
      transition: transform ${ANIMATION_TIME}ms linear;
    `}
`;
