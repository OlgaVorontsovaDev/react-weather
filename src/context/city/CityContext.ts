import { createContext } from 'react';

export type CityContextType = {
  city: string;
  setCity: (city: string) => void;
};

export const CityContext = createContext<CityContextType | undefined>(
  undefined
);
