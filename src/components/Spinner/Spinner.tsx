import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { BACKGROUND_COLOR, SIZES } from "./Spinner.constants";
import { SpinnerSizeType, SpinnerBackgroundType } from "./Spinner.types";

type SpinnerProps = {
  color?: string;
  background?: SpinnerBackgroundType;
  size?: SpinnerSizeType;
  fullHeight?: boolean;
  className?: string;
};

export const Spinner: FunctionComponent<SpinnerProps> = ({
  color = "black",
  background = "dark",
  size = "md",
  fullHeight = false,
  className,
}) => {
  const backgroundColor = BACKGROUND_COLOR[background];

  return (
    <Container fullHeight={fullHeight} className={className}>
      <Loader color={color} background={backgroundColor} size={size} />
    </Container>
  );
};

const Container = styled.div<{ fullHeight?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: ${({ fullHeight }) => fullHeight && "100vh"};
`;

const Loader = styled.div<{ size: SpinnerSizeType; color: string; background: string }>`
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
  ${({ size, color, background }) => {
    const numberSize = size ? SIZES[size] : 30;
    const borderSize = (numberSize * 3.9) / 32;

    return css`
      border: ${borderSize}px solid ${background};
      border-top: ${borderSize}px solid ${color};
      width: ${numberSize}px;
      height: ${numberSize}px;
    `;
  }};
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
