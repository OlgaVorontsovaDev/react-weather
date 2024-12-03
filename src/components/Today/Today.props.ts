import { HTMLAttributes } from 'react';

type Today = {
  temperature: number;
  image: string;
  humidity: number;
  city: string;
  visibility: number;
};

export type TodayProps = HTMLAttributes<HTMLDivElement> & Today;
