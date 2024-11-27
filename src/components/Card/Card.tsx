import { FC, useMemo } from 'react';
import { Paragraph } from '../Paragraph';
import { CardTypeProps } from './Card.props';
import styles from './Card.module.scss';
import classNames from 'classnames';

export const Card: FC<CardTypeProps> = ({
  weekday,
  date,
  icon,
  temperature_day,
  temperature_night,
  description,
  className,
  ...props
}) => {
  const cardClassname = useMemo(() => {
    return classNames(styles.card, className);
  }, [className]);
	
  return (
    <div {...props} className={cardClassname}>
      <Paragraph color='primary' size={18} text={weekday} />
      <Paragraph color='secondary' size={14} text={date} />
      <img src={icon} alt={description} />
      <Paragraph color='primary' size={18} text={temperature_day} />
      <Paragraph color='secondary' size={13} text={temperature_night} />
      <Paragraph color='secondary' size={13} text={description} />
    </div>
  );
};
