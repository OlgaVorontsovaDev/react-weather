import { HTMLAttributes } from 'react';

export type WeatherFeaturesType = {
  imageType: 'wind' | 'temp' | 'pressure' | 'precipitation';
  title: string;
  description: string;
};

export type WeatherFeaturesProps = HTMLAttributes<HTMLDivElement> &
  WeatherFeaturesType;
