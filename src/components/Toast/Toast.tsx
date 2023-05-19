import { FunctionComponent, useEffect, useRef, useState } from "react";
import { CheckCircle2, Info, X, XCircle, AlertCircle, LucideIcon } from "lucide-react";
import styled, { css, keyframes, RuleSet } from "styled-components";
import { IconButton } from "../IconButton";
import { ToastProps } from "./Toast.types";
import { Icon } from "@/components";
import { theme } from "@/css";
import { Colors } from "@/css/theme/colors";
import { useToast } from "@/hooks";

export const Toast: FunctionComponent<ToastProps> = ({
  children,
  id,
  duration = 5000,
  colorScheme = "grey",
}) => {
  const transitionTime = theme.transitions.durations.normal;

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

  const variantIcons: Record<Colors, LucideIcon> = {
    blue: Info,
    green: CheckCircle2,
    yellow: AlertCircle,
    red: XCircle,
    grey: Info,
  };

  const variantIconColors: Record<Colors, string> = {
    blue: theme.colors.white,
    green: theme.colors.white,
    yellow: theme.colors.white,
    red: theme.colors.white,
    grey: theme.colors.white,
  };

  return (
    <Container
      isClosing={isClosing}
      colorScheme={colorScheme}
      role="alert"
      transitionTime={transitionTime}
    >
      <Icon
        icon={variantIcons[colorScheme]}
        size={18}
        color={variantIconColors[colorScheme]}
      />
      <div>{children}</div>
      <CloseButtonWrapper onClick={closeToast}>
        <IconButton size="xs">
          <Icon icon={X} size={15} color={variantIconColors[colorScheme]} />
        </IconButton>
      </CloseButtonWrapper>
    </Container>
  );
};

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1);}
`;

const Container = styled.div<{
  isClosing: boolean;
  colorScheme: Colors;
  transitionTime: number;
}>`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[12]}
    ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  ${({ colorScheme, theme }) => {
    const variantStyles: Record<Colors, RuleSet<object>> = {
      grey: css`
        background-color: ${theme.colors.grey.default};
        color: ${theme.colors.white};
      `,
      blue: css`
        background-color: ${theme.colors.blue.default};
        color: ${theme.colors.white};
      `,
      green: css`
        background-color: ${theme.colors.green.default};
        color: ${theme.colors.white};
      `,
      red: css`
        background-color: ${theme.colors.red.default};
        color: ${theme.colors.white};
      `,
      yellow: css`
        background-color: ${theme.colors.yellow.default};
        color: ${theme.colors.white};
      `,
    };
    return variantStyles[colorScheme];
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
        transition: all ${transitionTime}ms ${({ theme }) => theme.transitions.timings.in};
      `;
    }
  }};
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[1.5]};
  right: ${({ theme }) => theme.spacing[1.5]};
`;
