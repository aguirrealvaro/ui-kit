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

type ShowMoreProps = {
  children: ReactNode;
  isOpen: boolean;
  minHeight: number;
};

export const ShowMore: FunctionComponent<ShowMoreProps> = ({
  children,
  isOpen,
  minHeight,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [showMoreEnabled, setShowMoreEnabled] = useState<boolean>(false);
  console.log(showMoreEnabled);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const handleStates = useCallback(() => {
    if (!containerRef.current) return;
    setContainerHeight(containerRef.current.scrollHeight);
    setShowMoreEnabled(containerRef.current.scrollHeight > minHeight);
  }, [minHeight]);

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
      minHeight={minHeight}
    >
      {children}
    </Paragraph>
  );
};

const Paragraph = styled.p<{
  isOpen: boolean;
  containerHeight: number;
  showMoreEnabled: boolean;
  minHeight: number;
}>`
  ${({ isOpen, containerHeight, showMoreEnabled, minHeight }) => {
    if (showMoreEnabled) {
      return css`
        height: ${isOpen ? containerHeight : minHeight}px;
        overflow-y: hidden;
        transition: height ${({ theme }) => theme.transitions.durations.normal}ms
          ${({ theme }) => theme.transitions.timings.out};
      `;
    }
  }}
`;
