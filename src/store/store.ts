import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currentWeatherSliceReducer from './slices/currentWeatherSlice';
import forecastSliceReducer from './slices/forecastSlice';
import citySliceReducer from './slices/citySlice';

const rootReducer = combineReducers({
  currentWeatherSliceReducer,
  forecastSliceReducer,
  citySliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
