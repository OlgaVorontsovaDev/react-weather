import Ash from '../../assets/icons/Ash.svg';
import Drizzle from '../../assets/icons/Drizzle.svg';
import RainSVG from '../../assets/icons/RainSVG.svg';
import Snow from '../../assets/icons/Snow.svg';
import Mist from '../../assets/icons/Mist.svg';
import Haze from '../../assets/icons/Haze.svg';
import Dust from '../../assets/icons/Dust.svg';
import Fog from '../../assets/icons/Fog.svg';
import Sand from '../../assets/icons/Sand.svg';
import Thunderstorm from '../../assets/icons/Thunderstorm.svg';
import Squall from '../../assets/icons/Squall.svg';
import Tornado from '../../assets/icons/Tornado.svg';
import Clear from '../../assets/icons/Clear.svg';
import Clouds from '../../assets/icons/Clouds.svg';
import Smoke from '../../assets/icons/Smoke.svg';
import { FC } from 'react';
import { WeatherPictureProps } from './WeatherPicture.props';

export const WeatherPicture: FC<WeatherPictureProps> = ({
  type,
  className,
  ...props
}) => {
  switch (type) {
    case 'Ash':
      return <img src={Ash} alt='Ash' {...props} className={className} />;
    case 'Drizzle':
      return (
        <img src={Drizzle} alt='Drizzle' {...props} className={className} />
      );
    case 'Rain':
      return <img src={RainSVG} alt='Rain' {...props} className={className} />;
    case 'Snow':
      return <img src={Snow} alt='Snow' {...props} className={className} />;
    case 'Mist':
      return <img src={Mist} alt='Mist' {...props} className={className} />;
    case 'Haze':
      return <img src={Haze} alt='Haze' {...props} className={className} />;
    case 'Dust':
      return <img src={Dust} alt='Dust' {...props} className={className} />;
    case 'Fog':
      return <img src={Fog} alt='Fog' {...props} className={className} />;
    case 'Sand':
      return <img src={Sand} alt='Sand' {...props} className={className} />;
    case 'Thunderstorm':
      return (
        <img
          src={Thunderstorm}
          alt='Thunderstorm'
          {...props}
          className={className}
        />
      );
    case 'Squall':
      return <img src={Squall} alt='Squall' {...props} className={className} />;
    case 'Tornado':
      return (
        <img src={Tornado} alt='Tornado' {...props} className={className} />
      );
    case 'Clear':
      return <img src={Clear} alt='Clear' {...props} className={className} />;
    case 'Clouds':
      return <img src={Clouds} alt='Clouds' {...props} className={className} />;
    case 'Smoke':
      return <img src={Smoke} alt='Smoke' {...props} className={className} />;
    default:
      return null;
  }
};
