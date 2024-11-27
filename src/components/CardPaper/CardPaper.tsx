import { FC, HTMLAttributes, useMemo } from 'react';
import classNames from 'classnames';
import styles from './CardPaper.module.scss';

export const CardPaper: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const cardPaperClassname = useMemo(() => {
    return classNames(styles.card__paper, className);
  }, [className]);
  return <div {...props} className={cardPaperClassname}></div>;
};
