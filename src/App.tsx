import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components";
import { ToastProvider } from "@/components";
import { theme, GlobalStyles } from "@/components/App";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Layout>App</Layout>
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
