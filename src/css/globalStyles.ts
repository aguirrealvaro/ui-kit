import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamilies.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
    color: ${({ theme }) => theme.vars.textPrimary};
    background-color: ${({ theme }) => theme.vars.bgPrimary};
  }
  
  img {
    max-width: 100%;
  }

  button {
    padding: 0;
    font: inherit;
    color: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
