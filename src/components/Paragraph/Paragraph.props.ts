import { HTMLAttributes } from 'react';

type Paragraph = {
  text: string;
  size: 96 | 40 | 25 | 18 | 14 | 13;
  color: 'accent' | 'primary' | 'secondary';
};

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & Paragraph;