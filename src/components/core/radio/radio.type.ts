import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Color =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info';

export interface RadioProps extends ComponentPropsWithoutRef<'input'> {
  children: ReactNode;
  color?: Color;
}
