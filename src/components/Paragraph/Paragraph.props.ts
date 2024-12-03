import { HTMLAttributes } from 'react';

type Paragraph = {
  text: string | number;
  size: 96 | 60 | 40 | 25 | 18 | 14 | 13;
  color: 'accent' | 'primary' | 'secondary';
};

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & Paragraph;