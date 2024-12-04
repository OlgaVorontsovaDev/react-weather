import { WeatherService } from '../../services/WeatherService';
import {
  fetchForecast,
  fetchForecastError,
  fetchForecastSuccess,
} from '../slices/forecastSlice';
import { AppDispatch } from '../store';

export const fetchCityForecast =
  (payload: string) => async (dispatch: AppDispatch) => {
    dispatch(fetchForecast());
    const result = await WeatherService.getForecast(payload);
    try {
      if (result.status === 200) {
        dispatch(fetchForecastSuccess(result));
      } else {
        dispatch(fetchForecastError(result));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };
