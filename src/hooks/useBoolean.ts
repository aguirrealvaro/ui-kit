import { useState } from "react";

type UseBooleanReturn = [boolean, Record<"on" | "off" | "toggle", () => void>];

export const useBoolean = (): UseBooleanReturn => {
  const [enabled, setEnabled] = useState<boolean>(false);

  const on = () => setEnabled(true);
  const off = () => setEnabled(false);
  const toggle = () => setEnabled(!enabled);

  const setFlag = { on, off, toggle };

  return [enabled, setFlag];
};
