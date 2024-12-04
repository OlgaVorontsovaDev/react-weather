import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { Paragraph } from '../Paragraph';
import { WeatherFeaturesProps } from './WeatherFeatures.props';
import WPic from '../../assets/icons/wind.svg';
import TPic from '../../assets/icons/temp.svg';
import Pressure from '../../assets/icons/pressure.svg';
import Precipitation from '../../assets/icons/precipitation.svg';
import styles from './WeatherFeatures.module.scss';

const imageMap = {
  wind: WPic,
  temp: TPic,
  pressure: Pressure,
  precipitation: Precipitation,
};

export const WeatherFeatures: FC<WeatherFeaturesProps> = ({
  imageType,
  title,
  description,
  className,
  ...props
}) => {
  const image = imageMap[imageType] || WPic;
  const weatherFeaturesClassname = useMemo(() => {
    return classNames(styles.features, className);
  }, [className]);

  return (
    <div {...props} className={weatherFeaturesClassname}>
      <div className={styles.icon}>
        <img src={image} alt={imageType} />
      </div>
      <Paragraph
        text={title}
        color='secondary'
        size={18}
        className={styles.text}
      />
      <Paragraph
        text={description}
        color='primary'
        size={18}
        className={styles.text}
      />
    </div>
  );
};
