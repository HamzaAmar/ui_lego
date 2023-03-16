import type {
  PopoverCloseProps as PopoverClose,
  PopoverProps,
} from '@radix-ui/react-popover';
import type { ReactNode } from 'react';

export type Placement =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'right-start'
  | 'right-center'
  | 'right-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end'
  | 'left-start'
  | 'left-center'
  | 'left-end';
type Side = 'left' | 'right' | 'top' | 'bottom';
type Align = 'end' | 'start' | 'center';

export type DirectionProps = Record<Placement, { side: Side; align: Align }>;

export interface PopoverCloseProps extends PopoverClose {
  title?: string;
}

export interface PopoverRootProps extends PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  placement?: Placement;
}
