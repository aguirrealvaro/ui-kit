import { createContext, FunctionComponent, ReactNode, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "@/components/App";

export type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
