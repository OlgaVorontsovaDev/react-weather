import { CardType } from '../components/Card/Card.props';
import Rain from '../assets/icons/rain.svg';
import RainSun from '../assets/icons/rain-sun.svg';

export const WEEK_WEATHER_DATA: CardType[] = [
  {
    date: 'Сегодня',
    pressure: '26 авг',
    icon: RainSun,
    temperature_day: '+18',
    temperature_night: '+15',
    description: 'Облачно',
  },
  {
    date: 'Завтра',
    pressure: '27 авг',
    icon: Rain,
    temperature_day: '+15',
    temperature_night: '+10',
    description: 'Небольшой дождь',
  },
  {
    date: 'Пн',
    pressure: '28 авг',
    icon: RainSun,
    temperature_day: '+18',
    temperature_night: '+15',
    description: 'Облачно',
  },
  {
    date: 'Сегодня',
    pressure: '29 авг',
    icon: RainSun,
    temperature_day: '+18',
    temperature_night: '+15',
    description: 'Облачно',
  },
  {
    date: 'Завтра',
    pressure: '30 авг',
    icon: Rain,
    temperature_day: '+15',
    temperature_night: '+10',
    description: 'Небольшой дождь',
  },
  {
    date: 'Пн',
    pressure: '31 авг',
    icon: RainSun,
    temperature_day: '+18',
    temperature_night: '+15',
    description: 'Облачно',
  },
  {
    date: 'Завтра',
    pressure: '32 авг',
    icon: Rain,
    temperature_day: '+15',
    temperature_night: '+10',
    description: 'Небольшой дождь',
  },
];
