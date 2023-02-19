import { ReactElement, ReactNode } from 'react';
import { Size } from '../../../types/utils';

export interface BreadcrumbProps {
  children: ReactNode;
  separator?: string | ReactElement;
  size?: Size;
}

export interface BreadcrumbItemProps extends BreadcrumbProps {
  link: string;
  current?: boolean;
  icon?: ReactNode;
}

export interface BreadcrumbContextType
  extends Omit<BreadcrumbProps, 'children'> {}

export interface BreadcrumbProviderProps extends BreadcrumbProps {}
