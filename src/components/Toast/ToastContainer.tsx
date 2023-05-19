import { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { Toast } from "./Toast";
import { ToastPositionType, ToastProps } from "./Toast.types";

type ToastContainerProps = {
  toasts: ToastProps[];
  position: ToastPositionType;
};

export const ToastContainer: FunctionComponent<ToastContainerProps> = ({
  toasts,
  position,
}) => {
  const Component = (
    <Container position={position}>
      {toasts.map((props) => {
        const { id, content } = props;
        return (
          <Toast key={id} {...props}>
            {content}
          </Toast>
        );
      })}
    </Container>
  );

  return createPortal(Component, document.body);
};

const Container = styled.div<{ position: ToastPositionType }>`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.toast};
  ${({ position, theme }) => {
    const positions: Record<ToastPositionType, FlattenSimpleInterpolation> = {
      top: css`
        top: ${theme.spacing[4]};
        left: 50%;
        transform: translateX(-50%);
      `,
      right: css`
        right: ${theme.spacing[4]};
        top: 50%;
        transform: translateY(-50%);
      `,
      bottom: css`
        bottom: ${theme.spacing[4]};
        left: 50%;
        transform: translateX(-50%);
      `,
      left: css`
        left: ${theme.spacing[4]};
        top: 50%;
        transform: translateY(-50%);
      `,
      "top-right": css`
        top: ${theme.spacing[4]};
        right: ${theme.spacing[4]};
      `,
      "bottom-right": css`
        bottom: ${theme.spacing[4]};
        right: ${theme.spacing[4]};
      `,
      "bottom-left": css`
        bottom: ${theme.spacing[4]};
        left: ${theme.spacing[4]};
      `,
      "top-left": css`
        top: ${theme.spacing[4]};
        left: ${theme.spacing[4]};
      `,
    };
    return positions[position];
  }};
`;
