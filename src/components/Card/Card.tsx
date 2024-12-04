import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { Paragraph } from '../Paragraph';
import { CardTypeProps } from './Card.props';
import { WeatherPicture } from '../WeatherPicture';
import styles from './Card.module.scss';

export const Card: FC<CardTypeProps> = ({
  date,
  pressure,
  icon,
  temperature,
  description,
  wind,
  className,
  ...props
}) => {
  const cardClassname = useMemo(() => {
    return classNames(styles.card, className);
  }, [className]);

  const dateArray = date.split('-');
  const cardDate = `${dateArray[2]}.${dateArray[1]}`;
  const temp = Math.floor(temperature);
  const pressureMM = Math.round(pressure * 0.750062);
  const windRound = Math.round(wind);

  return (
    <div {...props} className={cardClassname}>
      <Paragraph
        color='primary'
        size={25}
        text={cardDate}
        className={styles.card__date}
      />
      <Paragraph
        color='secondary'
        size={18}
        text={description}
        className={styles.card__dscription}
      />
      <div className={styles.temperature__wrap}>
        {temp <= 0 ? (
          <Paragraph color='accent' size={40} text={`${temp}°`} />
        ) : (
          <Paragraph color='accent' size={40} text={`+${temp}°`} />
        )}
        <WeatherPicture type={icon} className={styles.card__icon} />
      </div>
      <Paragraph
        color='secondary'
        size={14}
        text={`Давление: ${pressureMM} мм ртутного столба`}
        className={styles.card__pressure}
      />
      <Paragraph
        color='secondary'
        size={14}
        text={`Ветер: ${windRound} м/с`}
        className={styles.card__wind}
      />
    </div>
  );
};
