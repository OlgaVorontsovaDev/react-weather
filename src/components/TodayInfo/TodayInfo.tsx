import { FC, HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import { WeatherFeatures } from '../WeatherFeatures';
import { WeatherFeaturesType } from '../WeatherFeatures/WeatherFeatures.props';
import styles from './TodayInfo.module.scss';

const DATA: WeatherFeaturesType[] = [
  {
    imageType: 'temp',
    title: 'Температура',
    description: '20° - ощущается как 17°',
  },
  {
    imageType: 'pressure',
    title: 'Давление',
    description: '765 мм ртутного столба - нормальное',
  },
  {
    imageType: 'precipitation',
    title: 'Осадки',
    description: 'Без осадков',
  },
  {
    imageType: 'wind',
    title: 'Ветер',
    description: '3 м/с юго-запад - легкий ветер',
  },
];

export const TodayInfo: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const todayInfoClassname = useMemo(() => {
    return classNames(styles.today__info, className);
  }, [className]);

  return (
    <div {...props} className={todayInfoClassname}>
      {DATA.map((element) => {
        return (
          <WeatherFeatures
            key={element.title}
            imageType={element.imageType}
            title={element.title}
            description={element.description}
          />
        );
      })}
    </div>
  );
};
