import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import styled, { css } from "styled-components";

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

  const [showMoreEnabled, setShowMoreEnabled] = useState<boolean>(false);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const handleStates = useCallback(() => {
    if (!containerRef.current) return;
    setContainerHeight(containerRef.current.scrollHeight);
    setShowMoreEnabled(containerRef.current.scrollHeight > startingHeight);
  }, [startingHeight]);

  useLayoutEffect(() => {
    handleStates();
  }, [handleStates]);

  useEffect(() => {
    window.addEventListener("resize", handleStates);
    return () => window.removeEventListener("resize", handleStates);
  }, [handleStates]);

  return (
    <Paragraph
      ref={containerRef}
      isOpen={isOpen}
      containerHeight={containerHeight}
      showMoreEnabled={showMoreEnabled}
      startingHeight={startingHeight}
    >
      {children}
    </Paragraph>
  );
};

const Paragraph = styled.p<{
  isOpen: boolean;
  containerHeight: number;
  showMoreEnabled: boolean;
  startingHeight: number;
}>`
  ${({ isOpen, containerHeight, showMoreEnabled, startingHeight }) => {
    if (showMoreEnabled) {
      return css`
        height: ${isOpen ? containerHeight : startingHeight}px;
        overflow-y: hidden;
        transition: height ${({ theme }) => theme.transitions.durations.normal}ms
          ${({ theme }) => theme.transitions.timings.out};
      `;
    }
  }}
`;
