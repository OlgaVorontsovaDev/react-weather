import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { WeatherFeatures } from '../WeatherFeatures';
import { TodayInfoProps } from './TodayInfo.props';
import styles from './TodayInfo.module.scss';

export const TodayInfo: FC<TodayInfoProps> = ({
  precipitationDescription,
  pressureDescription,
  temperatureDescription,
  windDescription,
  className,
  ...props
}) => {
  const todayInfoClassname = useMemo(() => {
    return classNames(styles.today__info, className);
  }, [className]);

  const temperature = `${Math.floor(temperatureDescription)}°`;
  const pressure = `${pressureDescription} мм ртутного столба`;
  const wind = `${Math.ceil(windDescription)} м/с`;

  return (
    <div {...props} className={todayInfoClassname}>
      <WeatherFeatures
        imageType='temp'
        title='Температура'
        description={temperature}
      />
      <WeatherFeatures
        imageType='pressure'
        title='Давление'
        description={pressure}
      />
      <WeatherFeatures
        imageType='precipitation'
        title='Осадки'
        description={precipitationDescription}
      />
      <WeatherFeatures imageType='wind' title='Ветер' description={wind} />
    </div>
  );
};
