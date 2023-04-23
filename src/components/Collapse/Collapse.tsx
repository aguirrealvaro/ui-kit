import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";
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
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const handleHeight = useCallback(() => {
    if (!containerRef.current) return;
    setContainerHeight(containerRef.current.scrollHeight);
  }, []);

  useLayoutEffect(() => {
    handleHeight();
  }, [handleHeight]);

  useEffect(() => {
    window.addEventListener("resize", handleHeight);
    return () => window.removeEventListener("resize", handleHeight);
  }, [handleHeight]);

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
