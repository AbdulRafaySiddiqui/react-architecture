import { backendApi } from "../../config/apiConfig";
import { apiRoutes } from "../apiRoutes";
import { ApiResponse } from "../types";
import { WeatherForecastRaw } from "./types";

export const getWeatherForecast = async (): Promise<ApiResponse<WeatherForecastRaw>> => {
  try {
    const response = await backendApi.get(apiRoutes.weather.getForecast, {
      params: {
        latitude: 52.52,
        longitude: 13.41,
        current_weather: true,
        hourly: "temperature_2m,relativehumidity_2m,windspeed_10m",
      },
    });
    return {
      status: true,
      message: "weather fetched sucessfully!",
      data: response.data,
    };
  } catch (e) {
    return {
      status: false,
      message: "error fetching weather forecast",
    };
  }
};
