import { CardType } from '../components/Card/Card.props';
import Rain from '../assets/icons/rain.svg';
import RainSun from '../assets/icons/rain-sun.svg';

export const WEEK_WEATHER_DATA: CardType[] = [
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
