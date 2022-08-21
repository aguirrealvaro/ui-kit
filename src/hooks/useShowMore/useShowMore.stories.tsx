import { FunctionComponent, useRef } from "react";
import styled from "styled-components";
import { useShowMore } from "./useShowMore";

export default {
  title: "Hooks/useShowMore",
};

const MIN_CONTAINER_HEIGHT = 100;

export const Primary: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { showMore, showMoreEnabled, toggleShowMore, containerHeight } = useShowMore(
    containerRef,
    MIN_CONTAINER_HEIGHT
  );

  return (
    <div>
      <Paragraph
        ref={containerRef}
        showMore={showMore}
        containerHeight={containerHeight}
        showMoreEnabled={showMoreEnabled}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi, sit ex porro
        natus obcaecati eaque voluptatem! Mollitia debitis, asperiores illo, illum molestias
        aliquid omnis delectus dolor perferendis modi aspernatur? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dicta sequi, sit ex porro natus obcaecati eaque
        voluptatem! Mollitia debitis, asperiores illo, illum molestias aliquid omnis delectus
        dolor perferendis modi aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dicta sequi, sit ex porro natus obcaecati eaque voluptatem! Mollitia debitis,
        asperiores illo, illum molestias aliquid omnis delectus dolor perferendis modi
        aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi, sit
        ex porro natus obcaecati eaque voluptatem! Mollitia debitis, asperiores illo, illum
        molestias aliquid omnis delectus dolor perferendis modi aspernatur?
      </Paragraph>
      {showMoreEnabled && (
        <button onClick={toggleShowMore}>show {showMore ? "less" : "more"}</button>
      )}
    </div>
  );
};

const Paragraph = styled.div<{
  showMore: boolean;
  containerHeight: number;
  showMoreEnabled: boolean;
}>`
  width: 350px;
  height: ${({ showMore, containerHeight, showMoreEnabled }) => {
    if (showMoreEnabled) {
      return `${showMore ? containerHeight : MIN_CONTAINER_HEIGHT}px`;
    } else {
      return "auto";
    }
  }};
  margin-bottom: 1rem;
  overflow-y: hidden;
  transition: height 0.2s ease;
`;
