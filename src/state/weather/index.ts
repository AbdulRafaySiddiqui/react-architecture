import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherForecast } from "../../api/weather";
import { WeatherState } from "./types";
import { notifyDismiss, notifyError, notifyLoading, notifySuccess } from "../../components/Notification";

const initialState: WeatherState = {
  loadingForcast: false,
  city: "Karachi",
  forcast: {
    latitude: 0,
    longitude: 0,
    temperature: 0,
    windspeed: 0,
  },
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    setCityAction: (state, action: PayloadAction<{ city: string }>) => {
      state.city = action.payload.city;
    },
  },
  extraReducers: (builder) => {
    //#region fetchWeatherForcast
    builder.addCase(fetchWeatherForcastThunk.pending, (state) => {
      state.loadingForcast = true;
    });
    builder.addCase(fetchWeatherForcastThunk.rejected, (state) => {
      state.loadingForcast = false;
    });
    builder.addCase(fetchWeatherForcastThunk.fulfilled, (state, action) => {
      state.loadingForcast = false;
      state.forcast = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        temperature: action.payload.current_weather.temperature,
        windspeed: action.payload.current_weather.windspeed,
      };
    });
    //#endregion
  },
});

export const fetchWeatherForcastThunk = createAsyncThunk("weather/fetchWeatherForcast", async (args, thunkApi) => {
  const loadingId = notifyLoading("Fetching forcast...");
  const response = await getWeatherForecast();
  notifyDismiss(loadingId);
  if (response.status && response.data) {
    notifySuccess("Successfully fetched forcast!");
    return response.data;
  }

  notifyError(response.error);
  throw new Error(response.error);
});

export const { setCityAction } = weatherSlice.actions;
export default weatherSlice.reducer;
