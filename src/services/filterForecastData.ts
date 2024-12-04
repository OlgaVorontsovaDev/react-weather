import { ForecastItem, ForecastResponse } from '../store/types/forecast.types';

export const filterForecastData = (data: ForecastResponse): ForecastItem[] => {
  const filteredData: ForecastItem[] = [];
  const seenDates = new Set<string>();

  data.list.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!seenDates.has(date) && item.dt_txt.endsWith('12:00:00')) {
      filteredData.push(item);
      seenDates.add(date);
    }
  });

  return filteredData;
};
