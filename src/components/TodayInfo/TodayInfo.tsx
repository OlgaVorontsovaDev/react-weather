import { FC, HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import { WeatherFeatures } from '../WeatherFeatures';
import { WEATHER_DATA } from '../../mocks/WEATHER_DATA';
import styles from './TodayInfo.module.scss';

export const TodayInfo: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const todayInfoClassname = useMemo(() => {
    return classNames(styles.today__info, className);
  }, [className]);

  return (
    <div {...props} className={todayInfoClassname}>
      {WEATHER_DATA.map((element) => {
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
