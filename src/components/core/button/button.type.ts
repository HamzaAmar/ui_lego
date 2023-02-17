import type { ReactElement, CSSProperties } from 'react';
import type { Color, Corner, Size, Variant } from '../../../types/utils';

type VariantUnion = Variant | 'link' | 'text';
type Position = 'start' | 'end';
type State = 'idle' | 'loading';

interface BaseButton {
  size?: Size;
  color?: Color;
  corner?: Corner;
  state?: State;
  icon?: ReactElement;
  className?: string;
  style?: CSSProperties;
}
export interface ButtonProps extends BaseButton {
  variant?: VariantUnion;
  iconPosition?: Position;
  fluid?: boolean;
}

export interface IconButtonProps extends BaseButton {
  title: string;
  variant?: Variant;
}
