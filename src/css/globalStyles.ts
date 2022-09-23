import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./types";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamilies.body};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grey[13]};
  }
  
  img {
    max-width: 100%;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
