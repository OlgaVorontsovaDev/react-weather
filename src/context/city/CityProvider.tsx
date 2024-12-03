import { FC, PropsWithChildren, useState } from 'react';
import { CityContext } from './CityContext';

export const CityProvider: FC<PropsWithChildren> = ({ children }) => {
  const [city, setCity] = useState<string>('');

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};
