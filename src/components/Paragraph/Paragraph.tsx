import { FC, useMemo } from 'react';
import classNames from 'classnames';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.scss';

export const Paragraph: FC<ParagraphProps> = ({
  text,
  size,
  color,
  className,
  ...props
}) => {
  const paragraphClassname = useMemo(() => {
    return classNames(className, {
      [styles[`paragraph__${size}`]]: size,
      [styles[`paragraph__${color}`]]: color,
    });
  }, [className, size, color]);

  return (
    <p {...props} className={paragraphClassname}>
      {text}
    </p>
  );
};
