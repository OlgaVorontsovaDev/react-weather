import { FC, useMemo } from 'react';
import { TodayProps } from './Today.props';
import classNames from 'classnames';
import styles from './Today.module.scss';
import { Paragraph } from '../Paragraph';

export const Today: FC<TodayProps> = ({
  temperature,
  image,
  humidity,
  city,
  className,
  ...props
}) => {
  const todayCassname = useMemo(() => {
    return classNames(styles.today__block, className);
  }, [className]);

  const temp = Math.floor(temperature);

  return (
    <div {...props} className={todayCassname}>
      <div className={styles.today__block__main__info}>
        <div className={styles.today__block__temp}>
          <Paragraph text={`${temp}°`} color='accent' size={96} />
          <Paragraph text='Сегодня' color='primary' size={40} />
        </div>
        <img className={styles.picture} src={image} alt='weather-icon' />
      </div>
      <Paragraph
        text={`Влажность: ${humidity}%`}
        color='secondary'
        size={25}
        className={styles.time}
      />
      <Paragraph text={`Город: ${city}`} color='secondary' size={25} />
    </div>
  );
};
