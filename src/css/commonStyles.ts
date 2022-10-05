import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 75rem; //1200px
  width: 90%;
  margin: 0 auto;
`;

export const hiddenStyles = css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
