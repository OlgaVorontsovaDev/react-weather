import { CSSObjectWithLabel } from 'react-select';
import { ThemeEnum } from '../context/theme';

export const getSelectorStyles = (theme: ThemeEnum) => ({
  control: (base: CSSObjectWithLabel) => ({
    ...base,
    backgroundColor: theme === ThemeEnum.LIGHT ? '#DAE9FF' : '#2e3035',
    width: '260px',
    height: '37px',
    border: 'none',
    borderRadius: '10px',
    zIndex: 100,
  }),
  singleValue: (base: CSSObjectWithLabel) => ({
    ...base,
    color: theme === ThemeEnum.LIGHT ? '#000000' : '#ffffff',
  }),
  menu: (base: CSSObjectWithLabel) => ({
    ...base,
    backgroundColor: theme === ThemeEnum.LIGHT ? '#ffffff' : '#2e3035',
    color: theme === ThemeEnum.LIGHT ? '#000000' : '#ffffff',
  }),
  menuList: (base: CSSObjectWithLabel) => ({
    ...base,
    backgroundColor: theme === ThemeEnum.LIGHT ? '#ffffff' : '#2e3035',
    color: theme === ThemeEnum.LIGHT ? '#000000' : '#ffffff',
  }),
  option: (
    base: CSSObjectWithLabel,
    state: { isSelected: boolean; isFocused: boolean }
  ) => ({
    ...base,
    backgroundColor: state.isFocused
      ? theme === ThemeEnum.LIGHT
        ? '#DAE9FF'
        : '#4f4f4f'
      : 'transparent',
    color: theme === ThemeEnum.LIGHT ? '#000000' : '#ffffff',
  }),
});
