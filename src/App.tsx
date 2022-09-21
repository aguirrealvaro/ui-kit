import { FunctionComponent } from "react";
import { Layout } from "./components";
import { ThemeProvider } from "./contexts";
import { ToastProvider } from "@/components";
import { GlobalStyles } from "@/components/App";

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
