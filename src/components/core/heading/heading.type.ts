import type { ReactNode } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Align = 'start' | 'end' | 'center' | 'justify';
type Transform = 'uppercase' | 'lowercase' | 'capitalize';
type Weight = 'normal' | 'bold';

export interface HeadingBaseProps {
  children: ReactNode;
  size?: Size;
  as?: Heading;
  classNames?: string;
  align?: Align;
  transform?: Transform;
  weight?: Weight;
}

interface MultiLineHeadingTruncate extends HeadingBaseProps {
  truncate?: 'multiline';
  numberLine: number;
}

interface SingleLineHeadingTruncate extends HeadingBaseProps {
  truncate?: 'singleline';
}

export type HeadingProps = MultiLineHeadingTruncate | SingleLineHeadingTruncate;
