import { ReactNode } from 'react';

type Size = '3xs' | 'xxs' | 'xs' | 'md' | 'lg' | 'xl' | 'xxl' | '3xl';
type Align = 'start' | 'end' | 'center' | 'justify';
type Transform = 'uppercase' | 'lowercase' | 'capitalize';
type Weight = 'normal' | 'bold';
type Color = 'text' | 'grey' | 'primary' | 'danger' | 'warning' | 'success';

interface TextBaseProps {
  as?: 'p' | 'small' | 'label';
  size?: Size;
  className?: string;
  align?: Align;
  transform?: Transform;
  children: ReactNode;
  weight?: Weight;
  color?: Color;
}

interface MultiLineTextTruncate extends TextBaseProps {
  truncate?: 'multiline';
  numberLine: number;
}

interface SingleLineTextTruncate extends TextBaseProps {
  truncate?: 'singleline';
}

export type TextProps = MultiLineTextTruncate | SingleLineTextTruncate;
