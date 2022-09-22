import { FunctionComponent } from "react";
import { ColorMode } from "./ColorMode";
import { Layout } from "./components";
import { GlobalStyles } from "@/components/App";
import { ThemeProvider, ToastProvider } from "@/contexts";

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
