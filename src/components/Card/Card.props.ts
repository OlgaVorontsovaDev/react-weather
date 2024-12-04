import { HTMLAttributes } from 'react';

export type CardType = {
  date: string;
  pressure: number;
  icon: string;
  temperature: number;
  description: string;
  wind: number;
};

export type CardTypeProps = HTMLAttributes<HTMLDivElement> & CardType;
