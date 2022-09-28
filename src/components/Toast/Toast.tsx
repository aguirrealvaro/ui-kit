import { FunctionComponent, useEffect, useRef, useState } from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { Alert } from "@styled-icons/remix-fill/Alert";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css, keyframes } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { ToastVariantType, ToastProps } from "./Toast.types";
import { Icon } from "@/components/Icon";
import { ThemeType } from "@/css";
import { useTheme, useToast } from "@/hooks";

export const Toast: FunctionComponent<ToastProps> = ({
  children,
  id,
  duration = 5000,
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

  const iconColor = getColorValues(theme);

  return (
    <Container
      isClosing={isClosing}
      variant={variant}
      role="alert"
      transitionTime={transitionTime}
    >
      <Icon icon={variantIcons[variant]} size={18} color={iconColor[variant]} />
      <div>{children}</div>
      <CloseButton onClick={closeToast}>
        <Icon icon={CloseOutline} size={15} />
      </CloseButton>
    </Container>
  );
};
const variantIcons: Record<ToastVariantType, StyledIcon> = {
  default: InfoCircleFill,
  positive: CheckCircleFill,
  warning: Alert,
  negative: CloseCircle,
  neutral: InfoCircleFill,
};

const getColorValues = (theme: ThemeType) => {
  const colorValues: Record<ToastVariantType, string> = {
    default: theme.assets.brand,
    positive: theme.assets.success,
    warning: theme.assets.warning,
    negative: theme.assets.error,
    neutral: theme.colors.grey[10],
  };

  return colorValues;
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
  padding: 1rem 3rem 1rem 1rem;
  color: ${({ theme }) => theme.assets["primary-text"]};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.grey[1]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-left: 4px solid transparent;
  border-color: ${({ theme, variant }) => {
    const backgroundColors = getColorValues(theme);
    return backgroundColors[variant];
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

const CloseButton = styled.button`
  line-height: 0;
  position: absolute;
  top: 6px;
  right: 6px;
`;
