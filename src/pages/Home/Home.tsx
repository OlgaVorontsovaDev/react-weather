import { useEffect, useState } from 'react';
import { Today } from '../../components/Today';
import { TodayInfo } from '../../components/TodayInfo';
import { Card } from '../../components/Card';
import { CardPaper } from '../../components/CardPaper';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCityWeather } from '../../store/thunks/fetchCityWeather';
import { fetchCityForecast } from '../../store/thunks/fetchCityForecast';
import { filterForecastData } from '../../services/filterForecastData';
import { ForecastItem } from '../../store/types/forecast.types';
import { Paragraph } from '../../components/Paragraph';
import { localStorageApi } from '../../localStorageApi';
import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useCustomDispatch();
  const { city } = useCustomSelector((state) => state.citySliceReducer);
  const { weather, isLoading, error } = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );
  const { forecast } = useCustomSelector((state) => state.forecastSliceReducer);
  const [dailyForecast, setDailyForecast] = useState<ForecastItem[]>([]);
  const cityFromLocalStorage = localStorageApi.getCity();
  const cityName = cityFromLocalStorage ? cityFromLocalStorage : city;

  useEffect(() => {
    if (cityName) {
      dispatch(fetchCityWeather(cityName));
      dispatch(fetchCityForecast(cityName));
    }
  }, [cityName, dispatch]);

  useEffect(() => {
    if (forecast) {
      setDailyForecast(filterForecastData(forecast));
    }
  }, [forecast]);

  if (error) {
    return <Paragraph color='primary' size={36} text={error} />;
  }

  if (!cityName || weather === null) {
    return (
      <Paragraph color='primary' size={36} text='Введите название города' />
    );
  }

  const millimiters = Math.floor(weather.main.pressure * 0.750063755419211);

  if (isLoading) {
    return (
      <Paragraph color='primary' size={36} text='Идёт загрузка данных ...' />
    );
  }

  return (
    <div className={styles.home__container}>
      <div className={styles.home}>
        <Today
          temperature={weather.main.temp}
          image={weather.weather[0].main}
          humidity={weather.main.humidity}
          city={weather.name}
          description={weather.weather[0].description}
        />
        <TodayInfo
          temperatureDescription={weather.main.temp}
          pressureDescription={millimiters}
          precipitationDescription={weather.weather[0].description}
          windDescription={weather.wind.speed}
        />
      </div>
      <CardPaper>
        {dailyForecast.map((element) => {
          console.log('Element', element);
          return (
            <Card
              key={element.dt_txt}
              date={element.dt_txt.split(' ')[0]}
              pressure={element.main.pressure}
              icon={element.weather[0].main}
              temperature={element.main.temp}
              description={element.weather[0].description}
              wind={element.wind.speed}
            />
          );
        })}
      </CardPaper>
    </div>
  );
};
