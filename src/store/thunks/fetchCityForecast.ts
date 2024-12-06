import { AxiosError } from 'axios';
import { WeatherService } from '../../services/WeatherService';
import {
  fetchForecast,
  fetchForecastError,
  fetchForecastSuccess,
} from '../slices/forecastSlice';
import { AppDispatch } from '../store';

const errorMessage = 'Что-то пошло не так';

export const fetchCityForecast =
  (city: string) => async (dispatch: AppDispatch) => {
    dispatch(fetchForecast());
    try {
      const result = await WeatherService.getForecast(city);
      dispatch(fetchForecastSuccess(result));
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error.message || errorMessage;
        dispatch(fetchForecastError(message));
        return;
      }
      if (error instanceof Error) {
        dispatch(fetchForecastError(errorMessage));
      }
    }
  };
