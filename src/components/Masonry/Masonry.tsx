import { FunctionComponent, ReactNode } from "react";
import ReactMasonry, { MasonryProps as ReactMasonryProps } from "react-masonry-css";
import styled, { css } from "styled-components";

type MasonryProps = {
  children: ReactNode;
  gap: number;
} & Omit<ReactMasonryProps, "className">;

const Masonry: FunctionComponent<MasonryProps> = ({ children, gap, ...restProps }) => {
  return (
    <Container $gap={gap}>
      <ReactMasonry className="grid" columnClassName="grid-column" {...restProps}>
        {children}
      </ReactMasonry>
    </Container>
  );
};

export { Masonry, type MasonryProps };

const Container = styled.div<{ $gap: number }>`
  ${({ $gap }) => {
    return css`
      .grid {
        display: flex;
        margin-left: -${$gap}rem;
        width: auto;
      }
      .grid-column {
        padding-left: ${$gap}rem;
        background-clip: padding-box;
      }

      .grid-column > * {
        display: block;
        margin-bottom: ${$gap}rem;
      }
    `;
  }}
`;
