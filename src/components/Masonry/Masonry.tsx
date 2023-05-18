import { FunctionComponent, ReactNode } from "react";
import Masonry, { MasonryProps } from "react-masonry-css";
import styled, { css } from "styled-components";

type CustomMasonryProps = {
  children: ReactNode;
  gap: number;
} & Omit<MasonryProps, "className">;

export const CustomMasonry: FunctionComponent<CustomMasonryProps> = ({
  children,
  gap,
  ...restProps
}) => {
  return (
    <Container gap={gap}>
      <Masonry className="grid" columnClassName="grid-column" {...restProps}>
        {children}
      </Masonry>
    </Container>
  );
};

const Container = styled.div<{ gap: number }>`
  ${({ gap }) => {
    return css`
      .grid {
        display: flex;
        margin-left: -${gap}rem;
        width: auto;
      }
      .grid-column {
        padding-left: ${gap}rem;
        background-clip: padding-box;
      }

      .grid-column > * {
        display: block;
        margin-bottom: ${gap}rem;
      }
    `;
  }}
`;
