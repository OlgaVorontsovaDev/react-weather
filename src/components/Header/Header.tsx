import Select from 'react-select';
import { useState } from 'react';
import AppLogo from '/Logo.svg';
import ThemeToggler from '../../assets/icons/themeToggler.svg';
import { OptionType } from './Header.types';
import { CITIES } from '../../mocks/CITIES';
import { useTheme } from '../../hooks/useTheme';
import { ThemeContextType, ThemeEnum } from '../../context/theme';
import { getSelectorStyles } from '../../models/getSelectorStyles';
import styles from './Header.module.scss';

export const Header = () => {
  const { theme, toggleTheme }: ThemeContextType = useTheme();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (selectedOption: OptionType | null) => {
    setSelectedOption(selectedOption);
  };

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
  };

  const handleToggleTheme = () => {
    toggleTheme(theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT);
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
        <Select
          options={CITIES}
          value={selectedOption}
          onChange={handleChange}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onMenuOpen={() => {}}
          onMenuClose={() => {}}
          placeholder='Выбрать город ...'
          styles={getSelectorStyles(theme)}
          defaultValue={CITIES[0]}
        />
      </div>
    </header>
  );
};
