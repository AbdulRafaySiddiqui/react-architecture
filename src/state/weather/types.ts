export interface WeatherState {
  city: string;
  loadingForcast: boolean;
  forcast: {
    temperature: number;
    windspeed: number;
    latitude: number;
    longitude: number;
  };
}
