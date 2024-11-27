import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { Paragraph } from '../Paragraph';
import { WeatherFeatures } from '../WeatherFeatures';
import { PopupProps } from './Popup.props';
import { CloseIcon } from '../CloseIcon/CloseIcon';
import styles from './Popup.module.scss';

export const Popup: FC<PopupProps> = ({
  temperature,
  weekday,
  time,
  city,
  image,
  weather_data,
  className,
  ...props
}) => {
  const popupClassname = useMemo(() => {
    return classNames(styles.popup, className);
  }, [className]);

  return (
    <>
      <div className={styles.backdrop}></div>
      <div {...props} className={popupClassname}>
        <CloseIcon className={styles.close__icon} />
        <div className={styles.popup__data}>
          <div className={styles.main__info}>
            <Paragraph text={`${temperature}°`} color='accent' size={60} />
            <Paragraph text={weekday} color='primary' size={25} />
            <img src={image} alt='weather data' />
            <Paragraph text={`Время: ${time}`} color='secondary' size={14} />
            <Paragraph text={`Город: ${city}`} color='secondary' size={14} />
          </div>
          <div className={styles.details}>
            {weather_data.map((element) => {
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
        </div>
      </div>
    </>
  );
};
