import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedItem = localStorage.getItem(key);
      return storedItem !== null ? JSON.parse(storedItem) : initialValue;
    } catch (error) {
      console.warn(`LocalStorage key "${key}" okunamadı:`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`LocalStorage key "${key}" kaydedilemedi:`, error);
    }
  }, [key, value]);

  return [value, setValue];
}