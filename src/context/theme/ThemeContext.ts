import { createContext } from 'react';

export type ThemeContextType = {
  theme: ThemeEnum;
  toggleTheme: (theme: ThemeEnum) => void;
};

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export const themeContext = createContext<ThemeContextType>({
  theme: ThemeEnum.LIGHT,
  toggleTheme: () => {},
});
