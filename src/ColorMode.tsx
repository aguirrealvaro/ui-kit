import { FunctionComponent } from "react";
import { useTheme } from "./hooks";

export const ColorMode: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useTheme();

  return (
    <div>
      <span>color mode: {colorMode}</span>
      <button onClick={toggleColorMode}>Toggle color!</button>
    </div>
  );
};
