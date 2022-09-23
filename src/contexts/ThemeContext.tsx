import { createContext, FunctionComponent, ReactNode, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { COLOR_MODE_KEY } from "@/constants";
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
  const [colorMode, setColorMode] = useState<ColorModeType>(() => {
    return (localStorage.getItem(COLOR_MODE_KEY) || "light") as ColorModeType;
  });

  const toggleColorMode = () => {
    const mode = colorMode === "light" ? "dark" : "light";
    setColorMode(mode);
    localStorage.setItem(COLOR_MODE_KEY, mode);
  };

  const theme = getTheme(colorMode);

  return (
    <ThemeContext.Provider value={{ theme, colorMode, toggleColorMode }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
