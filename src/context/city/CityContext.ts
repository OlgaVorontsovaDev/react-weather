import { createContext } from 'react';

export type CityContextType = {
  city: string;
  changeCity: (city: string) => void;
};

export const CityContext = createContext<CityContextType>({
  city: 'kazan',
  changeCity: () => {},
});
