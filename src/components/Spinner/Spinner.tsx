import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { SPINER_SIZES } from "./Spinner.constants";
import { SpinnerSizeType } from "./Spinner.types";
import { theme } from "@/css";

type SpinnerProps = {
  color?: string;
  size?: SpinnerSizeType;
  fullHeight?: boolean;
};

export const Spinner: FunctionComponent<SpinnerProps> = ({
  color,
  size = "md",
  fullHeight = false,
}) => {
  return (
    <Container fullHeight={fullHeight}>
      <Loader color={color || theme.colors.grey.default} size={size} />
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

const Loader = styled.div<{ size: SpinnerSizeType; color: string }>`
  border-radius: ${({ theme }) => theme.borderRadius.full};
  animation: spin 1.5s linear infinite;
  ${({ size, color, theme }) => {
    const numberSize = size ? SPINER_SIZES[size] : 30;
    const borderSize = (numberSize * 3.9) / 32;

    return css`
      border: ${borderSize}px solid ${theme.colors.grey[200]};
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
