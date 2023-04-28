import { FunctionComponent } from "react";
import { Layout } from "@/components";
import { ToastProvider } from "@/contexts";

const App: FunctionComponent = () => {
  return (
    <ToastProvider>
      <Layout>App</Layout>
    </ToastProvider>
  );
};

export default App;
