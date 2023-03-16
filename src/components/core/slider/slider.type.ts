import type { CSSProperties, ReactNode } from 'react';
import type { SliderProps } from '@radix-ui/react-slider';
import type { Color, Corner } from '../../../types/utils';

type Variant = 'solid' | 'outline';

type Size = 'sm' | 'md' | 'lg';

export interface SliderRootProps extends SliderProps {
  color?: Color;
  label: string;
  size?: Size;
  sliderPrefix?: ReactNode;
  SliderSuffix?: ReactNode;
}

export interface SliderThumbProps {
  size?: Size;
  variant?: Variant;
  corner?: Corner;
  className?: string;
  style?: CSSProperties;
}

export interface SliderTrackProps {
  size?: Size;
  variant?: Variant;
  corner?: Corner;
}

export interface SliderRootTest extends Omit<SliderRootProps, 'children'> {}
