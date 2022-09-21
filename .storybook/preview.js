import React from "react";
import { theme, GlobalStyles } from "@/components/App";
import { ToastProvider } from "@/components";
import { ThemeProvider } from "@/contexts";

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
  (Story) => (
    <ThemeProvider>
      <ToastProvider>
        <Story />
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  ),
];
