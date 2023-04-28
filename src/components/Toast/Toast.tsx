import { FunctionComponent, useEffect, useRef, useState } from "react";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { InfoCircleFill } from "@styled-icons/bootstrap/InfoCircleFill";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { Alert } from "@styled-icons/remix-fill/Alert";
import { CloseCircle } from "@styled-icons/remix-fill/CloseCircle";
import styled, { css, keyframes, FlattenSimpleInterpolation } from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { IconButton } from "../IconButton";
import { ToastProps } from "./Toast.types";
import { Icon } from "@/components/Icon";
import { theme } from "@/css";
import { useToast } from "@/hooks";
import { VariantType } from "@/types";

export const Toast: FunctionComponent<ToastProps> = ({
  children,
  id,
  duration = 5000,
  variant = "success",
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

  const variantIcons: Record<VariantType, StyledIcon> = {
    primary: InfoCircleFill,
    success: CheckCircleFill,
    warning: Alert,
    danger: CloseCircle,
    neutral: InfoCircleFill,
  };

  const variantIconColors: Record<VariantType, string> = {
    primary: theme.colors.white,
    success: theme.colors.white,
    warning: theme.colors.white,
    danger: theme.colors.white,
    neutral: theme.colors.white,
  };

  return (
    <Container
      isClosing={isClosing}
      variant={variant}
      role="alert"
      transitionTime={transitionTime}
    >
      <Icon icon={variantIcons[variant]} size={18} color={variantIconColors[variant]} />
      <div>{children}</div>
      <CloseButtonWrapper onClick={closeToast}>
        <IconButton size="xs">
          <Icon icon={CloseOutline} size={15} color={variantIconColors[variant]} />
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
  variant: VariantType;
  transitionTime: number;
}>`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[12]}
    ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadows.md};
  ${({ variant, theme }) => {
    const variantStyles: Record<VariantType, FlattenSimpleInterpolation> = {
      primary: css`
        background-color: ${theme.assets.primary};
        color: ${theme.colors.white};
      `,
      success: css`
        background-color: ${theme.assets.success};
        color: ${theme.colors.white};
      `,
      danger: css`
        background-color: ${theme.assets.danger};
        color: ${theme.colors.white};
      `,
      warning: css`
        background-color: ${theme.assets.warning};
        color: ${theme.colors.white};
      `,
      neutral: css`
        background-color: ${theme.assets.neutral};
        color: ${theme.colors.white};
      `,
    };
    return variantStyles[variant];
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
