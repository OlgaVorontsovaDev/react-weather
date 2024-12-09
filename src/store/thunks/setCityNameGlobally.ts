import { localStorageApi } from '../../localStorageApi';
import { setCityName } from '../slices/citySlice';
import { AppDispatch } from '../store';

export const setCityNameGlobally =
  (city: string) => (dispatch: AppDispatch) => {
    dispatch(setCityName(city));
    localStorageApi.setCity(city);
  };
