import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherResponse } from '../types/currentWeather.types';
import { AxiosResponse } from 'axios';

type CurrentWeather = {
  weather: WeatherResponse | null;
  isLoading: boolean;
  error: null | string;
};

const initialState: CurrentWeather = {
  weather: null,
  isLoading: false,
  error: null,
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<WeatherResponse>>
    ) {
      state.isLoading = false;
      state.error = null;
      state.weather = action.payload.data;
    },
    fetchCurrentWeatherError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCurrentWeather,
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherError,
} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
