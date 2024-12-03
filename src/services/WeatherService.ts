import api from '../axios';
import { WeatherResponse } from '../store/types/types';

export class WeatherService {
  static getCurrentWeather(city: string) {
    return api.get<WeatherResponse>(`/weather?q=${city}`);
  }
}
