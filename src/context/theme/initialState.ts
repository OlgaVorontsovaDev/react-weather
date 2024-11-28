import { localStorageApi } from '../../api';

const themeFromLocalStorage = localStorageApi.getTheme();
export const initialState = themeFromLocalStorage || 'light';
