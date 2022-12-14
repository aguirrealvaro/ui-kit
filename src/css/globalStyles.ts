import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

type GlobalStylesType = {
  themeMode: string;
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle<GlobalStylesType>`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    color-scheme: ${({ themeMode }) => themeMode}
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamilies.body};
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
    color: ${({ theme }) => theme.assets.textPrimary};
    background-color: ${({ theme }) => theme.assets.bgPrimary};
  }
  
  img {
    max-width: 100%;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    background: none;
    cursor: pointer;
    :focus:not(:focus-visible) {
      outline: none;
    }
  }
`;
