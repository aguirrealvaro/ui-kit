import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

type GlobalStylesType = {
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle<GlobalStylesType>`
  :root {
    // variants
    --primary: ${({ theme }) => theme.colors.blue[500]};
    --success: ${({ theme }) => theme.colors.green[500]};
    --warning: ${({ theme }) => theme.colors.yellow[500]};
    --danger: ${({ theme }) => theme.colors.red[500]};
    --neutral: ${({ theme }) => theme.colors.black};

    // basics
    --bgPrimary: ${({ theme }) => theme.colors.grey[50]};
    --bgSecondary: ${({ theme }) => theme.colors.white};
    --bgTertiary: ${({ theme }) => theme.colors.grey[100]};

    --border: "rgba(0, 0, 0, 0.1)",
    --hover: "rgba(0, 0, 0, 0.05)",

    --textHeading: ${({ theme }) => theme.colors.black};
    --textPrimary: ${({ theme }) => theme.colors.grey[900]};
    --textSecondary: ${({ theme }) => theme.colors.grey[600]};

    --disabledPrimary: ${({ theme }) => theme.colors.grey[300]};
    --disabledSecondary: ${({ theme }) => theme.colors.grey[500]};
  }

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
    color: ${({ theme }) => theme.assets.textPrimary};
    background-color: ${({ theme }) => theme.assets.bgPrimary};
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
