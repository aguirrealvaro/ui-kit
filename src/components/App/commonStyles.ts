import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export const originalImageWitdth = css`
  > span {
    position: unset !important;
  }
  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;
