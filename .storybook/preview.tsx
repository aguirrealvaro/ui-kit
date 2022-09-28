import { GlobalStyles } from "@/css";
import { ThemeProvider, ToastProvider } from "@/contexts";
import styled from "styled-components";

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
        <Main>
          <Story />
        </Main>
        <GlobalStyles />
      </ToastProvider>
    </ThemeProvider>
  ),
];

const Main = styled.main`
  display: flex;
  padding: 2rem;
`;
