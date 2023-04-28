import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./css";
import { Layout } from "@/components";
import { ToastProvider } from "@/contexts";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Layout>Main</Layout>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
