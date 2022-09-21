import { FunctionComponent } from "react";
import { Layout, ToastProvider } from "./components";
import { GlobalStyles } from "@/components/App";
import { ThemeProvider } from "@/contexts";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Layout>App</Layout>
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
