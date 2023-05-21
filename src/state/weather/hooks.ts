import { useSelector } from "react-redux";
import { fetchWeatherForcastThunk, setCityAction } from ".";
import { RootState, useAppDispatch } from "../store";

export const useWeatherForecast = () => {
  const weather = useSelector((state: RootState) => state.weather);
  const dispatch = useAppDispatch();

  const fetch = () => {
    dispatch(fetchWeatherForcastThunk());
  };

  return {
    fetch,
    fetchDep: [],
    loading: weather.loadingForcast,
    forcast: weather.forcast,
  };
};

export const useWeatherCity = () => {
  const { city } = useSelector((state: RootState) => state.weather);
  const dispatch = useAppDispatch();

  const setCity = (city: string) => {
    dispatch(setCityAction({ city }));
  };

  return {
    city,
    setCity,
  };
};
