import { ThemeEnum } from '../context/theme';

export const localStorageApi = {
  setTheme: (theme: ThemeEnum) => {
    localStorage.setItem('theme', JSON.stringify(theme));
  },
  getTheme: () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      return JSON.parse(theme);
    }
  },
};
