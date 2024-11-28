import { useContext } from 'react';
import { themeContext, ThemeContextType } from '../context/theme';

export const useTheme = (): ThemeContextType => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
