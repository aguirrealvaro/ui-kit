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
import { Button } from "../Button";

type ShowMoreProps = {
  children: ReactNode;
  minHeight: number;
  showMoreLegend?: string;
  showLessLegend?: string;
};

export const ShowMore: FunctionComponent<ShowMoreProps> = ({
  children,
  minHeight,
  showMoreLegend = "Show more",
  showLessLegend = "Show less",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [showMore, setShowMore] = useState<boolean>(false);
  const [showMoreEnabled, setShowMoreEnabled] = useState<boolean>(false);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const toggleShowMore = () => setShowMore(!showMore);

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
    <Container>
      <Paragraph
        ref={containerRef}
        showMore={showMore}
        containerHeight={containerHeight}
        showMoreEnabled={showMoreEnabled}
        minHeight={minHeight}
      >
        {children}
      </Paragraph>
      {showMoreEnabled && (
        <Button onClick={toggleShowMore} kind="link">
          {showMore ? showLessLegend : showMoreLegend}
        </Button>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paragraph = styled.p<{
  showMore: boolean;
  containerHeight: number;
  showMoreEnabled: boolean;
  minHeight: number;
}>`
  ${({ showMore, containerHeight, showMoreEnabled, minHeight }) => {
    if (showMoreEnabled) {
      return css`
        height: ${showMore ? containerHeight : minHeight}px;
        margin-bottom: 1rem;
        overflow-y: hidden;
        transition: height ${({ theme }) => theme.transitions.normal}ms ease-in;
      `;
    }
  }}
`;
