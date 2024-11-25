import Select, { CSSObjectWithLabel } from 'react-select';
import { useState } from 'react';
import AppLogo from '../../../public/Logo.svg';
import ThemeToggler from '../../assets/icons/themeToggler.svg';
import { OptionType } from './Header.types';
import styles from './Header.module.scss';

const OPTIONS = [
  { value: 'Казань', label: 'Казань' },
  { value: 'Сочи', label: 'Сочи' },
  { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
];

const COLOR_STYLES = {
  control: (base: CSSObjectWithLabel) => ({
    ...base,
    backgroundColor: '#DAE9FF',
    width: '260px',
    height: '37px',
    border: 'none',
    borderRadius: '10px',
    zIndex: 100,
  }),
};

export const Header = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (selectedOption: OptionType | null) => {
    setSelectedOption(selectedOption);
  };

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
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
        />
        <Select
          options={OPTIONS}
          value={selectedOption}
          onChange={handleChange}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          onMenuOpen={() => {}}
          onMenuClose={() => {}}
          placeholder='Выбрать город ...'
          styles={COLOR_STYLES}
          defaultValue={OPTIONS[0]}
        />
      </div>
    </header>
  );
};
