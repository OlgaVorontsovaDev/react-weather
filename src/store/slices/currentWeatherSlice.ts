import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherResponse } from '../types/types';
import { AxiosResponse } from 'axios';

type CurrentWeather = {
  weather: WeatherResponse;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: CurrentWeather = {
  weather: {
    coord: {
      lon: -0.13,
      lat: 51.51,
    },
    weather: [
      {
        id: 300,
        main: 'Drizzle',
        description: 'light intensity drizzle',
        icon: '09d',
      },
    ],
    base: 'stations',
    main: {
      temp: 18.32,
      pressure: 1012,
      humidity: 81,
      temp_min: 17.15,
      temp_max: 21.15,
    },
    visibility: 10000,
    wind: {
      speed: 4.1,
      deg: 80,
    },
    clouds: {
      all: 90,
    },
    dt: 1485789600,
    sys: {
      type: 1,
      id: 5091,
      message: 0.0103,
      country: 'GB',
      sunrise: 1485762037,
      sunset: 1485794875,
    },
    id: 2643743,
    name: 'London',
    cod: 200,
  },

  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<WeatherResponse>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<WeatherResponse>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export const {
  fetchCurrentWeather,
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherError,
} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
