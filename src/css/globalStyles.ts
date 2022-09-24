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
    font-family: ${({ theme }) => theme.typography.fontFamilies.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
    color: ${({ theme }) => theme.assets.primaryText};
    background-color: ${({ theme }) => theme.colors.grey[2]};
  }
  
  img {
    max-width: 100%;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;
