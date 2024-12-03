import { HTMLAttributes } from 'react';

type TodayInfo = {
  temperatureDescription: number;
  pressureDescription: number;
  precipitationDescription: string;
  windDescription: number;
};

export type TodayInfoProps = HTMLAttributes<HTMLDivElement> & TodayInfo;
