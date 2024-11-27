import { HTMLAttributes } from 'react';
import { WeatherFeaturesType } from '../WeatherFeatures/WeatherFeatures.props';

type PopupType = {
  temperature: number;
  weekday: string;
  time: string;
  city: string;
  image: string;
  weather_data: WeatherFeaturesType[];
};

export type PopupProps = HTMLAttributes<HTMLDivElement> & PopupType;
