import { createContext, FunctionComponent, ReactNode, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { getTheme } from "@/css/theme";
import { ColorModeType, ThemeType } from "@/css/types";

export type ThemeContextType = {
  theme: ThemeType;
  colorMode: ColorModeType;
  toggleColorMode: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorModeType>("light");

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  const theme = getTheme(colorMode);

  return (
    <ThemeContext.Provider value={{ theme, colorMode, toggleColorMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
