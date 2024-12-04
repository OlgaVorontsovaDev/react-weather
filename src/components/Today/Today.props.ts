import { HTMLAttributes } from 'react';

type Today = {
  temperature: number;
  image: string;
  humidity: number;
  city: string;
  description: string;
};

export type TodayProps = HTMLAttributes<HTMLDivElement> & Today;
