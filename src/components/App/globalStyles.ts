import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
  }

  ${({ theme }) => theme.breakpoint("sm")} {
    body {
      font-size: 90%;
    }
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
  }
`;
