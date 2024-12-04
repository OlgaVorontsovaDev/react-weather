import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ForecastResponse } from '../types/forecast.types';

type WeatherForecast = {
  forecast: ForecastResponse;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: WeatherForecast = {
  forecast: {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [],
    city: {
      id: 0,
      name: '',
      coord: {
        lat: 0,
        lon: 0,
      },
      country: '',
      population: 0,
      timezone: 0,
      sunrise: 0,
      sunset: 0,
    },
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    fetchForecast(state) {
      state.isLoading = true;
    },
    fetchForecastSuccess(
      state,
      action: PayloadAction<AxiosResponse<ForecastResponse>>
    ) {
      state.isLoading = false;
      state.forecast = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchForecastError(
      state,
      action: PayloadAction<AxiosResponse<ForecastResponse>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export const { fetchForecast, fetchForecastError, fetchForecastSuccess } =
  forecastSlice.actions;

export default forecastSlice.reducer;
