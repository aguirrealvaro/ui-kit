import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { ToastProvider } from "@/components";
import { theme, GlobalStyles } from "@/components/App";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        App
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
