import "styled-components";
import { ThemeType } from "@/css";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
