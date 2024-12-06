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
  setCity: (city: string) => {
    localStorage.setItem('city', JSON.stringify(city));
  },
  getCity: () => {
    const city = localStorage.getItem('city');
    if (city) {
      return JSON.parse(city);
    }
  },
};
