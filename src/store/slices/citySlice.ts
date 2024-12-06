import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CityName = {
  city: string;
};

const initialState: CityName = {
  city: '',
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCityName(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
});

export const { setCityName } = citySlice.actions;

export default citySlice.reducer;
