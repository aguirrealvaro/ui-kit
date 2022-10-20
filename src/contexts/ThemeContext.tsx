import { createContext, FunctionComponent, ReactNode, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { THEME_MODE_KEY } from "@/constants";
import { ThemeModeType, getTheme, ThemeType } from "@/css";

export type ThemeContextType = {
  theme: ThemeType;
  themeMode: ThemeModeType;
  toggleThemeMode: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeModeType>(() => {
    return (localStorage.getItem(THEME_MODE_KEY) || "dark") as ThemeModeType;
  });

  const toggleThemeMode = () => {
    const mode = themeMode === "light" ? "dark" : "light";
    setThemeMode(mode);
    localStorage.setItem(THEME_MODE_KEY, mode);
  };

  const theme = getTheme(themeMode);

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleThemeMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
