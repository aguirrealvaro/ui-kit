import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "@/contexts/ThemeContext";

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};
