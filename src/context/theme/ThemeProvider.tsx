import { FC, PropsWithChildren, useState } from 'react';
import { themeContext, ThemeEnum } from './ThemeContext';
import { changeSCSSRootVariables } from '../../models/changeSCSSRootVariables';
import { localStorageApi } from '../../localStorageApi';

export const ThemeProvider: FC<PropsWithChildren> = ({
  children,
  ...props
}) => {
  const [theme, setTheme] = useState<ThemeEnum>(
    localStorageApi.getTheme() || ThemeEnum.LIGHT
  );
  changeSCSSRootVariables(theme);
  const toggleTheme = (newTheme: ThemeEnum) => {
    localStorageApi.setTheme(newTheme);
    setTheme(newTheme);
    changeSCSSRootVariables(newTheme);
  };
  return (
    <themeContext.Provider {...props} value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
