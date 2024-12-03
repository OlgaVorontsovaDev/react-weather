import { HTMLAttributes } from 'react';

type WeatherPicture = {
  type: string;
};

export type WeatherPictureProps = HTMLAttributes<HTMLImageElement> &
  WeatherPicture;
