import { FunctionComponent } from "react";
import { ColorMode } from "./components/App";
import { Layout } from "@/components";
import { ThemeProvider, ToastProvider } from "@/contexts";

const App: FunctionComponent = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Layout>
          <ColorMode />
        </Layout>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
