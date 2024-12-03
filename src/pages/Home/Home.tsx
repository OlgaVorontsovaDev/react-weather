import { useEffect } from 'react';
import { Today } from '../../components/Today';
import Sunny from '../../assets/icons/sunny-weather.svg';
import { TodayInfo } from '../../components/TodayInfo';
import { Card } from '../../components/Card';
import { CardPaper } from '../../components/CardPaper';
import { Button } from '../../components/Button';
import { WEEK_WEATHER_DATA } from '../../mocks/WEEK_WEATHER_DATA';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchWeather } from '../../store/thunks/fetchCurrentWeather';
import { useCity } from '../../hooks/useCity';
import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useCustomDispatch();
  const { city } = useCity();
  const { isLoading, response, weather } = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
    }
  }, [city, dispatch]);

  const millimiters = Math.floor(weather.main.pressure * 0.750063755419211);

  return (
    <div className={styles.home__container}>
      <div className={styles.home}>
        <Today
          temperature={weather.main.temp}
          image={weather.weather[0].main}
          humidity={weather.main.humidity}
          city={weather.name}
          visibility={weather.visibility}
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
            <Button isActive>На неделю</Button>
            <Button>На месяц</Button>
            <Button>На 10 дней</Button>
          </div>
          <Button>Отменить</Button>
        </div>
        <CardPaper>
          {WEEK_WEATHER_DATA.map((element) => {
            return (
              <Card
                key={element.date}
                weekday={element.weekday}
                date={element.date}
                icon={element.icon}
                temperature_day={element.temperature_day}
                temperature_night={element.temperature_night}
                description={element.description}
              />
            );
          })}
        </CardPaper>
      </div>
    </div>
  );
};
