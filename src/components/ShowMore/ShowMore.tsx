import { FunctionComponent, ReactNode, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

type ShowMoreProps = {
  children: ReactNode;
  minHeight: number;
};

export const ShowMore: FunctionComponent<ShowMoreProps> = ({ children, minHeight }) => {
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
        <button onClick={toggleShowMore}>{showMore ? "Show less" : "Show more"}</button>
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
        transition: height 0.2s ease;
      `;
    } else {
      return css`
        height: auto;
      `;
    }
  }}
`;
