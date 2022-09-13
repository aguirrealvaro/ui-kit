import { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const ANIMATION_TIME = 200;

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

  useEffect(() => {
    if (!containerRef.current) return;
    setContainerHeight(containerRef.current.scrollHeight);
    setShowMoreEnabled(containerRef.current.scrollHeight > minHeight);
  }, [minHeight]);

  return (
    <div>
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
        <Button onClick={toggleShowMore}>{showMore ? showLessLegend : showMoreLegend}</Button>
      )}
    </div>
  );
};

const Paragraph = styled.div<{
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
        transition: height ${ANIMATION_TIME}ms ease;
      `;
    } else {
      return css`
        height: auto;
      `;
    }
  }}
`;

const Button = styled.button`
  display: flex;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 15px;
`;
