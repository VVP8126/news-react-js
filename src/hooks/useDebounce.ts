import React from 'react';

export const useDebounce = (value: string, delay: number): string => {
  const [debounced, setDebounced] = React.useState<string>(value);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounced;
};
