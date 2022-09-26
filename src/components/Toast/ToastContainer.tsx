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
  ${({ position }) => {
    const positions: Record<ToastPositionType, FlattenSimpleInterpolation> = {
      top: css`
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `,
      right: css`
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
      `,
      bottom: css`
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
      `,
      left: css`
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
      `,
      "top-right": css`
        top: 1rem;
        right: 1rem;
      `,
      "bottom-right": css`
        bottom: 1rem;
        right: 1rem;
      `,
      "bottom-left": css`
        bottom: 1rem;
        left: 1rem;
      `,
      "top-left": css`
        top: 1rem;
        left: 1rem;
      `,
    };
    return positions[position];
  }};
`;
