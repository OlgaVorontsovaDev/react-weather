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
import styles from './Home.module.scss';

export const Home = () => {
  const dispatch = useCustomDispatch();
  const { isLoading, response, weather } = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );

  useEffect(() => {
    dispatch(fetchWeather('vancouver'));
  }, []);

  return (
    <div className={styles.home__container}>
      <div className={styles.home}>
        <Today
          temperature={weather.main.temp}
          image={Sunny}
          humidity={weather.main.humidity}
          city={weather.name}
        />
        <TodayInfo
          temperatureDescription={weather.main.temp}
          pressureDescription={weather.main.pressure}
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
