import { FC, useMemo } from 'react';
import { TodayProps } from './Today.props';
import classNames from 'classnames';
import styles from './Today.module.scss';
import { Paragraph } from '../Paragraph';
import { WeatherPicture } from '../WeatherPicture';

export const Today: FC<TodayProps> = ({
  temperature,
  image,
  humidity,
  city,
  visibility,
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
          {temp <= 0 ? (
            <Paragraph text={`${temp}°`} color='accent' size={96} />
          ) : (
            <Paragraph text={`+${temp}°`} color='accent' size={96} />
          )}
          {city.length > 11 ? (
            <Paragraph text={city} color='primary' size={25} />
          ) : (
            <Paragraph text={city} color='primary' size={36} />
          )}
        </div>
        <WeatherPicture type={image} />
      </div>
      <Paragraph
        text={`Влажность: ${humidity}%`}
        color='secondary'
        size={25}
        className={styles.time}
      />
      <Paragraph
        text={`Видимость: ${visibility} метров`}
        color='secondary'
        size={25}
      />
    </div>
  );
};
