import { WeatherFeaturesType } from '../components/WeatherFeatures/WeatherFeatures.props';

export const WEATHER_DATA: WeatherFeaturesType[] = [
  {
    imageType: 'temp',
    title: 'Температура',
    description: '20° - ощущается как 17°',
  },
  {
    imageType: 'pressure',
    title: 'Давление',
    description: '765 мм ртутного столба - нормальное',
  },
  {
    imageType: 'precipitation',
    title: 'Осадки',
    description: 'Без осадков',
  },
  {
    imageType: 'wind',
    title: 'Ветер',
    description: '3 м/с юго-запад - легкий ветер',
  },
];
