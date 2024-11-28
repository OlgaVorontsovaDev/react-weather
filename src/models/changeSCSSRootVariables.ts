import { ThemeEnum } from '../context/theme';

export const changeSCSSRootVariables = (theme: ThemeEnum) => {
  const root = document.querySelector(':root') as HTMLElement;

  const themeVariables = [
    'background-color',
    'text-primary-color',
    'text-secondary-color',
    'card-background-color',
    'active-text-color',
    'paper-background-color',
  ];

  themeVariables.forEach((variable) => {
    root.style.setProperty(
      `--${variable}-default`,
      `var(--${variable}-${theme})`
    );
  });
};
