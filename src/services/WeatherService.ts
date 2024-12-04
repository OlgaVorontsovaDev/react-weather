import api from '../axios';
import { WeatherResponse } from '../store/types/currentWeather.types';
import { ForecastResponse } from '../store/types/forecast.types';

export class WeatherService {
  static getCurrentWeather(city: string) {
    return api.get<WeatherResponse>(`/weather?q=${city}`);
  }

  static getForecast(city: string) {
    return api.get<ForecastResponse>(`/forecast?q=${city}`);
  }
}
