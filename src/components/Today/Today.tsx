import { FC, useMemo } from 'react';
import { TodayProps } from './Today.props';
import classNames from 'classnames';
import styles from './Today.module.scss';

export const Today: FC<TodayProps> = ({
  temperature,
  image,
  time,
  city,
  className,
  ...props
}) => {
  const todayCassname = useMemo(() => {
    return classNames(styles.today__block, className);
  }, [className]);

  return (
    <div {...props} className={todayCassname}>
      <div className={styles.today__block__main__info}>
        <div className={styles.today__block__temp}>
          <div className={styles.temperature}>{temperature}°</div>
          <div className={styles.title}>Сегодня</div>
        </div>
        <img className={styles.picture} src={image} alt='weather-icon' />
      </div>

      <div className={styles.time}>Время: {time}</div>
      <div className={styles.city}>Город: {city}</div>
    </div>
  );
};
