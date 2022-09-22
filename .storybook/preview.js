import { GlobalStyles } from "@/css";
import { ThemeProvider, ToastProvider } from "@/contexts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <ToastProvider>
        <Story />
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  ),
];
