import { FC, PropsWithChildren, useState } from 'react';
import { CityContext } from './CityContext';
import { localStorageApi } from '../../api';

export const CityProvider: FC<PropsWithChildren> = ({ children, ...props }) => {
  const [city, setCity] = useState<string>(
    localStorageApi.getCity() || 'kazan'
  );

  const changeCity = (newCity: string) => {
    localStorageApi.setCity(newCity);
    setCity(newCity);
  };

  return (
    <CityContext.Provider {...props} value={{ city, changeCity }}>
      {children}
    </CityContext.Provider>
  );
};
