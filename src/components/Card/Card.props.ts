import { HTMLAttributes } from 'react';

export type CardType = {
  weekday: string;
  date: string;
  icon: string;
  temperature_day: string;
  temperature_night: string;
  description: string;
};

export type CardTypeProps = HTMLAttributes<HTMLDivElement> & CardType;
