import { FunctionComponent, useEffect, useRef, useState } from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";
import { Alert } from "@styled-icons/remix-fill/Alert";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css, keyframes } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { ToastVariantType, ToastProps } from "./Toast.types";
import { Icon } from "@/components/Icon";
import { useTheme, useToast } from "@/hooks";

export const Toast: FunctionComponent<ToastProps> = ({
  children,
  id,
  duration = 3000,
  variant = "default",
}) => {
  const { theme } = useTheme();
  const transitionTime = theme.transitions.normal;

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timeoutRef = useRef<number>(0);

  const toast = useToast();

  useEffect(() => {
    if (duration === "infinite") return;

    timeoutRef.current = window.setTimeout(() => {
      setIsClosing(true);
      timeoutRef.current = window.setTimeout(() => {
        setIsClosing(false);
        toast.remove(id);
      }, transitionTime);
    }, duration);
  }, [id, toast, transitionTime, duration]);

  const closeToast = () => {
    setIsClosing(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      toast.remove(id);
    }, transitionTime);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Container
      onClick={closeToast}
      isClosing={isClosing}
      variant={variant}
      role="alert"
      transitionTime={transitionTime}
    >
      <Icon icon={variantIcons[variant]} size={18} color={theme.colors.grey[1]} />
      <div>{children}</div>
    </Container>
  );
};

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const Container = styled.div<{
  isClosing: boolean;
  variant: ToastVariantType;
  transitionTime: number;
}>`
  position: relative;
  display: flex;
  gap: 8px;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.grey[1]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-bottom: 1rem;
  background-color: ${({ theme, variant }) => {
    const backgroundColor: Record<ToastVariantType, string> = {
      default: theme.colors.brand,
      positive: theme.colors.green.base,
      warning: theme.colors.yellow.base,
      negative: theme.colors.red.base,
      neutral: theme.colors.grey[15],
    };

    return backgroundColor[variant];
  }};
  &:last-child {
    margin-bottom: 0;
  }
  animation: ${fadeInScale} ${({ transitionTime }) => transitionTime}ms linear;
  ${({ isClosing, transitionTime }) => {
    if (isClosing) {
      return css`
        opacity: 0;
        transform: scale(0.9);
        transition: all ${transitionTime}ms ease-out;
      `;
    }
  }};
`;

const variantIcons: Record<ToastVariantType, StyledIcon> = {
  default: InfoCircleFill,
  positive: CheckCircleFill,
  warning: Alert,
  negative: CloseCircle,
  neutral: InfoCircleFill,
};
