import classNames from 'classnames';
import { FC, useMemo } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = ({
  className,
  isActive = false,
  ...props
}) => {
  const buttonClassname = useMemo(() => {
    return classNames(styles.button, className, { [styles.active]: isActive });
  }, [className, isActive]);

  return <button {...props} type='button' className={buttonClassname} />;
};
