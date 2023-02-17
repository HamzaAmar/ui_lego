import type { ReactNode } from 'react';
import type { Color, Corner, Size } from '../../../types/utils';

type Variant = 'solid' | 'soft' | 'outline';

export interface ChipsProps {
  variant?: Variant;
  size?: Size;
  color?: Color;
  corner?: Corner;
  children: ReactNode;
}
