import type { CSSProperties } from 'react';
import { Color, Size } from '../../../types/utils';

type Icon = 'star' | 'heart';

export interface RatingProps {
  rating: number;
  size?: Size;
  className?: string;
  showLabel?: boolean;
  style?: CSSProperties;
  color?: Color;
  icon?: Icon;
}
