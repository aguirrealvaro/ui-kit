import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { ToastProvider } from "@/components";
import { theme, GlobalStyles } from "@/components/App";

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <ToastProvider>
      App
      <GlobalStyles />
    </ToastProvider>
  </ThemeProvider>
);
