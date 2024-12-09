import { WeatherService } from '../../services/WeatherService';
import { AppDispatch } from '../store';
import {
  fetchCurrentWeather,
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherError,
} from '../slices/currentWeatherSlice';
import { AxiosError } from 'axios';

const errorMessage = 'Что-то пошло не так';

export const fetchCityWeather =
  (city: string) => async (dispatch: AppDispatch) => {
    dispatch(fetchCurrentWeather());
    try {
      const res = await WeatherService.getCurrentWeather(city);
      dispatch(fetchCurrentWeatherSuccess(res));
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const message = error.message || errorMessage;
        // TODO:: not found city -> Город не найден
        dispatch(fetchCurrentWeatherError(message));
        return;
      }
      if (error instanceof Error) {
        dispatch(fetchCurrentWeatherError(errorMessage));
      }
    }
  };
