import { useEffect, useState } from 'react';
import { Today } from '../../components/Today';
import { TodayInfo } from '../../components/TodayInfo';
import { Card } from '../../components/Card';
import { CardPaper } from '../../components/CardPaper';
import { Button } from '../../components/Button';
import { WEEK_WEATHER_DATA } from '../../mocks/WEEK_WEATHER_DATA';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCityWeather } from '../../store/thunks/fetchCityWeather';
import { fetchCityForecast } from '../../store/thunks/fetchCityForecast';
import { useCity } from '../../hooks/useCity';
import { filterForecastData } from '../../services/filterForecastData';
import { ForecastItem } from '../../store/types/forecast.types';
import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useCustomDispatch();
  const { city } = useCity();
  const { weather } = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );
  const { forecast } = useCustomSelector((state) => state.forecastSliceReducer);
  const [dailyForecast, setDailyForecast] = useState<ForecastItem[]>([]);

  useEffect(() => {
    if (city) {
      dispatch(fetchCityWeather(city));
      dispatch(fetchCityForecast(city));
    }
  }, [city, dispatch]);

  const millimiters = Math.floor(weather.main.pressure * 0.750063755419211);

  useEffect(() => {
    if (forecast) {
      setDailyForecast(filterForecastData(forecast));
    }
  }, [forecast]);

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
      <div className={styles.filter}>
        <div className={styles.buttons}>
          <div className={styles.buttons__by__period}>
            <Button isActive>На 5 дней</Button>
            <Button>На месяц</Button>
            <Button>На 10 дней</Button>
          </div>
          <Button>Отменить</Button>
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
    </div>
  );
};
