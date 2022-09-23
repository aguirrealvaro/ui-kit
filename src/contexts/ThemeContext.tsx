import { createContext, FunctionComponent, ReactNode, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { COLOR_MODE_KEY } from "@/constants";
import { ColorModeType, getTheme, ThemeType } from "@/css";

export type ThemeContextType = {
  theme: ThemeType;
  themeMode: ColorModeType;
  toggleColorMode: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ColorModeType>(() => {
    return (localStorage.getItem(COLOR_MODE_KEY) || "light") as ColorModeType;
  });

  const toggleColorMode = () => {
    const mode = themeMode === "light" ? "dark" : "light";
    setThemeMode(mode);
    localStorage.setItem(COLOR_MODE_KEY, mode);
  };

  const theme = getTheme(themeMode);

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleColorMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
