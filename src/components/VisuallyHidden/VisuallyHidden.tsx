import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type VisuallyHiddenProps = {
  children: ReactNode;
  as: keyof HTMLElementTagNameMap;
};

const VisuallyHidden: FunctionComponent<VisuallyHiddenProps> = ({ children, as }) => {
  return <Container as={as}>{children}</Container>;
};

const Container = styled.div`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export { VisuallyHidden, type VisuallyHiddenProps };
