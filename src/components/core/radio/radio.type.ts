import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Color, Direction, Size } from '../../../types/utils';

export interface RadioProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'> {
  label: string;
  size?: Size;
  color?: Color;
  description?: string;
}
interface RadioGroupBase {
  color?: Color;
  size?: Size;
  name: string;
  children: ReactNode;
}

export interface RadioGroupProps extends RadioGroupBase {
  direction?: Direction;
  showLabel?: boolean;
  label: string;
  id: string;
}

export interface RadioProviderProps extends RadioGroupBase {}

export type RadioGroupContextProps = Omit<RadioGroupBase, 'children'>;
