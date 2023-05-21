import { useGenericStateFetch } from "../../hooks/useGenericStateFetch";
import { useWeatherForecast } from "../../state/weather/hooks";
import { SelectCity } from "./components/SelectCity";
import { WeatherForecastDetails } from "./components/WeatherForcastDetails";
import { Typography } from "@mui/material";

export const Home = () => {
  useGenericStateFetch(useWeatherForecast);

  return (
    <div>
      <Typography variant="h2">Weather Forcast</Typography>
      <SelectCity />
      <WeatherForecastDetails />
    </div>
  );
};
