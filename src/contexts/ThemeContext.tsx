import { createContext, FunctionComponent, ReactNode, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme, darkTheme } from "@/components/App";
type ModeType = "light" | "dark";

export type ThemeContextType = {
  colorMode: ModeType;
  toggleColorMode: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [colorMode, setColorMode] = useState<ModeType>("light");

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      <StyledThemeProvider theme={colorMode === "light" ? theme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
