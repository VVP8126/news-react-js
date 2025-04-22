import React, { createContext, ReactNode, useContext } from 'react';

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Context error');
  }
  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
