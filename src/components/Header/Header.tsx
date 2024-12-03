import { ChangeEvent, useState, KeyboardEvent } from 'react';
import { Button } from '../Button';
import AppLogo from '/Logo.svg';
import ThemeToggler from '../../assets/icons/themeToggler.svg';
import { useTheme } from '../../hooks/useTheme';
import { ThemeContextType, ThemeEnum } from '../../context/theme';
import { useCity } from '../../hooks/useCity';
import { CityContextType } from '../../context/city';
import styles from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme }: ThemeContextType = useTheme();
  const { city, changeCity: setCity }: CityContextType = useCity();
  const [inputValue, setInputValue] = useState<string>('');

  const handleToggleTheme = () => {
    toggleTheme(theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setCity(inputValue);
  };

  const handleEnterKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img src={AppLogo} alt='logo' className={styles.logo} />
        <p className={styles.title}>React Weather</p>
      </div>
      <div className={styles.wrapper}>
        <img
          src={ThemeToggler}
          alt='theme-toggler'
          className={styles.themeToggler}
          onClick={handleToggleTheme}
        />
        <div className={styles.input__group}>
          <input
            type='text'
            placeholder='Введите название города...'
            className={styles.input}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyDown}
          />
          <Button onClick={handleButtonClick}>Поиск</Button>
        </div>
      </div>
    </header>
  );
};
