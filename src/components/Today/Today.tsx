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
  description,
  className,
  ...props
}) => {
  const todayCassname = useMemo(() => {
    return classNames(styles.today__block, className);
  }, [className]);

  const temp = Math.floor(temperature);

  const capitalizeFirstLetter = (str: string) => {
    if (str.trim().length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const capitalizedDescr = capitalizeFirstLetter(description);

  return (
    <div {...props} className={todayCassname}>
      <div className={styles.today__block__main__info}>
        <div className={styles.today__block__temp}>
          {temp <= 0 ? (
            <Paragraph
              text={`${temp}°`}
              color='accent'
              size={96}
              className={styles.text__temp}
            />
          ) : (
            <Paragraph
              text={`+${temp}°`}
              color='accent'
              size={96}
              className={styles.text__temp}
            />
          )}
          {city.length > 11 ? (
            <Paragraph
              text={city}
              color='primary'
              size={25}
              className={styles.text__city}
            />
          ) : (
            <Paragraph
              text={city}
              color='primary'
              size={36}
              className={styles.text__city}
            />
          )}
        </div>
        <WeatherPicture type={image} className={styles.picture} />
      </div>
      <div className={styles.today__block__description}>
        <Paragraph
          text={capitalizedDescr}
          color='secondary'
          size={25}
          className={styles.text__description}
        />
        <Paragraph
          text={`Влажность: ${humidity}%`}
          color='secondary'
          size={25}
          className={styles.text__humidity}
        />
      </div>
    </div>
  );
};
