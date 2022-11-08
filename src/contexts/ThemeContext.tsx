import { Box, ThemeProvider } from '@mui/material';
import { createContext, useCallback, useMemo, useState } from 'react';
import { darkTheme, lightTheme } from '../style/themes';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContextData);

interface IThemeContextProviderProps {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: IThemeContextProviderProps) {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }, [themeName]);

  const theme = useMemo(() => {
    if (themeName === 'light') return lightTheme;
    return darkTheme
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}