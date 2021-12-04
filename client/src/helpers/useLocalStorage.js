import { useEffect, useState } from 'react';

function getSavedValue(key, defaultValue) {
  const savedValue = localStorage.getItem(key);
  return savedValue || defaultValue;
}

function useLocalStorage(key, initalValue) {
  const [value, setValue] = useState(getSavedValue(key, initalValue));
  useEffect(() => localStorage.setItem(key, value), [key, value]);
  return [value, setValue];
}

export default useLocalStorage;
