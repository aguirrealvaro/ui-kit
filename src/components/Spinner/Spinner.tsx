import { FunctionComponent } from "react";
import styled, { css, keyframes } from "styled-components";
import { SPINER_SIZES } from "./Spinner.constants";
import { SpinnerSizeType } from "./Spinner.types";

type SpinnerProps = {
  color?: string;
  size?: SpinnerSizeType;
};

export const Spinner: FunctionComponent<SpinnerProps> = ({
  color = "currentColor",
  size = "md",
}) => {
  return (
    <Container>
      <Loader $color={color} $size={size} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const spin = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`;

const Loader = styled.div<{ $size: SpinnerSizeType; $color: string }>`
  border-radius: ${({ theme }) => theme.borderRadius.full};
  animation-name: ${spin};
  animation-duration: 1500ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  ${({ $size, $color, theme }) => {
    const numberSize = $size ? SPINER_SIZES[$size] : 30;
    const borderSize = (numberSize * 3.9) / 32;
    return css`
      border: ${borderSize}px solid ${theme.colors.grey[200]};
      border-top: ${borderSize}px solid ${$color};
      width: ${numberSize}px;
      height: ${numberSize}px;
    `;
  }};
`;
