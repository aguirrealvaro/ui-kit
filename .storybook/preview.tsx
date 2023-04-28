import React from "react";
import { GlobalStyles, theme } from "../src/css";
import { ToastProvider } from "../src/contexts";
import styled, { ThemeProvider } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Main>
            <Story />
          </Main>
          <GlobalStyles />
        </ToastProvider>
      </ThemeProvider>
    );
  },
];

const Main = styled.main`
  padding: 2rem;
`;
