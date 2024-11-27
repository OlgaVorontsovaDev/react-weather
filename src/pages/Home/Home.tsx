import { Today } from '../../components/Today';
import Sunny from '../../assets/icons/sunny-weather.svg';
import { TodayInfo } from '../../components/TodayInfo';
import { CardType } from '../../components/Card/Card.props';
import Rain from '../../assets/icons/rain.svg';
import RainSun from '../../assets/icons/rain-sun.svg';
import { Card } from '../../components/Card';
import styles from './Home.module.scss';
import { CardPaper } from '../../components/CardPaper';
import { Button } from '../../components/Button';

const WEEK_WEATHER_DATA: CardType[] = [
  {
    weekday: 'Сегодня',
    date: '26 авг',
    icon: RainSun,
    temperature_day: '+18',
    temperature_night: '+15',
    description: 'Облачно',
  },
  {
    weekday: 'Завтра',
    date: '27 авг',
    icon: Rain,
    temperature_day: '+15',
    temperature_night: '+10',
    description: 'Небольшой дождь',
  },
  {
    weekday: 'Пн',
    date: '28 авг',
    icon: RainSun,
    temperature_day: '+18',
    temperature_night: '+15',
    description: 'Облачно',
  },
  {
    weekday: 'Сегодня',
    date: '29 авг',
    icon: RainSun,
    temperature_day: '+18',
    temperature_night: '+15',
    description: 'Облачно',
  },
  {
    weekday: 'Завтра',
    date: '30 авг',
    icon: Rain,
    temperature_day: '+15',
    temperature_night: '+10',
    description: 'Небольшой дождь',
  },
  {
    weekday: 'Пн',
    date: '31 авг',
    icon: RainSun,
    temperature_day: '+18',
    temperature_night: '+15',
    description: 'Облачно',
  },
  {
    weekday: 'Завтра',
    date: '32 авг',
    icon: Rain,
    temperature_day: '+15',
    temperature_night: '+10',
    description: 'Небольшой дождь',
  },
];

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <Today
          temperature={20}
          image={Sunny}
          time='21:54'
          city='Санкт-петербург'
        />
        <TodayInfo />
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

      <Button>Кнопка</Button>
      <Button isActive>Кнопка</Button>
    </>
  );
};
