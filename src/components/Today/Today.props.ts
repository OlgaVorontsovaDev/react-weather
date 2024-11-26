import { HTMLAttributes } from 'react';

type Today = {
  temperature: number;
  image: string;
  time: string;
  city: string;
};

export type TodayProps = HTMLAttributes<HTMLDivElement> & Today;