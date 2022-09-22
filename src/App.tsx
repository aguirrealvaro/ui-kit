import { FunctionComponent } from "react";
import { ColorMode } from "./components/App";
import { Layout } from "@/components";
import { ThemeProvider, ToastProvider } from "@/contexts";
import { GlobalStyles } from "@/css";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Layout>
          <ColorMode />
        </Layout>
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
