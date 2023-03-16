import type { ReactNode } from 'react';
import type {
  DropdownMenuProps,
  DropdownMenuContentProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioItemProps,
} from '@radix-ui/react-dropdown-menu';

type Color = 'primary' | 'secondary' | 'danger' | 'success' | 'info';

// export interface MenuButtonProps {}

export interface MenuButtonContent extends DropdownMenuContentProps {
  variant: 'regular' | 'sticky';
  color?: Color;
}

export interface MenuButtonProps extends DropdownMenuProps {
  children: ReactNode;
  trigger: ReactNode;
}

export interface MenuButtonCheckboxProps extends DropdownMenuCheckboxItemProps {
  children: ReactNode;
}

export interface MenuButtonItemProps {
  children: ReactNode;
}

export interface MenuButtonRadioGroupProps
  extends DropdownMenuRadioGroupProps {}
export interface MenuButtonRadioProps extends DropdownMenuRadioItemProps {}
