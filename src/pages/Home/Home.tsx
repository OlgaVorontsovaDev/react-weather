import { Today } from '../../components/Today';
import Sunny from '../../assets/icons/sunny-weather.svg';
import { TodayInfo } from '../../components/TodayInfo';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Today
        temperature={20}
        image={Sunny}
        time='21:54'
        city='Санкт-петербург'
      />
      <TodayInfo />
    </div>
  );
};
