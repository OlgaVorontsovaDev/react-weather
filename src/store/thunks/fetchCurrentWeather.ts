import { WeatherService } from '../../services/WeatherService';
import { AppDispatch } from '../store';
import {
  fetchCurrentWeather,
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherError,
} from '../slices';

export const fetchWeather =
  (payload: string) => async (dispatch: AppDispatch) => {
    dispatch(fetchCurrentWeather());
    const res = await WeatherService.getCurrentWeather(payload);
    try {
      if (res.status === 200) {
        dispatch(fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(fetchCurrentWeatherError(res));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };
