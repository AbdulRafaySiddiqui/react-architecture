import { PrimaryButton } from "../../../../components/PrimaryButton";
import { useWeatherForecast } from "../../../../state/weather/hooks";

export const WeatherForecastDetails = () => {
  const { fetch, loading, forcast } = useWeatherForecast();

  return (
    <div>
      <PrimaryButton loading={loading} onClick={fetch}>
        Reload forcast
      </PrimaryButton>

      <h3>Temperature</h3>
      <p>{forcast.temperature} °C</p>

      <h3>Windspeed</h3>
      <p>{forcast.windspeed}</p>

      <h3>Latitude</h3>
      <p>{forcast.latitude}</p>

      <h3>Longitude</h3>
      <p>{forcast.longitude}</p>
    </div>
  );
};
