import { FunctionComponent, ReactNode, useRef } from "react";
import styled from "styled-components";

type CollapseProps = {
  children: ReactNode;
  isOpen: boolean;
  startingHeight: number;
};

export const Collapse: FunctionComponent<CollapseProps> = ({
  children,
  isOpen,
  startingHeight,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerHeight = containerRef.current?.scrollHeight || 0;

  return (
    <Container
      ref={containerRef}
      isOpen={isOpen}
      containerHeight={containerHeight}
      startingHeight={startingHeight}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<{
  isOpen: boolean;
  containerHeight: number;
  startingHeight: number;
}>`
  height: ${({ isOpen, containerHeight, startingHeight }) =>
    isOpen ? containerHeight : startingHeight}px;
  overflow-y: hidden;
  transition: height ${({ theme }) => theme.transitions.durations.normal}ms
    ${({ theme }) => theme.transitions.timings.out};
`;
