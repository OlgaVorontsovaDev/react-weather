import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ForecastResponse } from '../types/forecast.types';

type WeatherForecast = {
  forecast: ForecastResponse | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: WeatherForecast = {
  forecast: null,
  isLoading: false,
  error: null,
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    fetchForecast(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchForecastSuccess(
      state,
      action: PayloadAction<AxiosResponse<ForecastResponse>>
    ) {
      state.isLoading = false;
      state.forecast = action.payload.data;
      state.error = null;
    },
    fetchForecastError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchForecast, fetchForecastError, fetchForecastSuccess } =
  forecastSlice.actions;

export default forecastSlice.reducer;
