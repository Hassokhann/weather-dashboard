import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: null,
  forecast: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setForecast: (state, action) => {
      state.forecast = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setWeather,
  setForecast,
  setLoading,
  setError,
} = weatherSlice.actions;

export default weatherSlice.reducer;