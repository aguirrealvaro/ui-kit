import { useState } from "react";

type UseLocalStorageReturn<T> = [T, (value: T) => void];

export const useLocalStorage = <T>(key: string, initialValue: T): UseLocalStorageReturn<T> => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
