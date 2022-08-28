import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Color =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info';
type Variant = 'contained' | 'outline' | 'text' | 'icon' | 'none';
type Alignment = 'start' | 'end';
type State = 'idle' | 'loading';
type Position = 'start' | 'end';
type Radius = 'full' | 'round' | 'sm' | 'md' | 'lg' | 'xl' | 'none';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  size?: Size;
  variant?: Variant;
  color?: Color;
  iconAlignment?: Alignment;
  icon?: ReactElement;
  state?: State;
  classNames?: string;
  iconPosition?: Position;
  radius?: Radius;
}

export interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  classNames?: string;
  icon: ReactElement;
  color?: Color;
  positionEnd?: boolean;
}
