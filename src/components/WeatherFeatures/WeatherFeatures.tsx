import styles from './WeatherFeatures.module.scss';

export const WeatherFeatures = ({ image }) => {
  return (
    <div>
      <div className={styles.icon}>
        <img src={image} />
		  </div>
		  <p></p>
    </div>
  );
};
