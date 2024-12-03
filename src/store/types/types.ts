export type WeatherResponse = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
};

export type Coord = {
  lon: number;
  lat: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Main = {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
};

export type Wind = {
  speed: number;
  deg: number;
};

export type Clouds = {
  all: number;
};

export type Sys = {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
};
