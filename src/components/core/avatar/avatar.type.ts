import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { Color, Corner, Size } from '../../../types/utils';
import type { BadgeProps } from '../badge/badge.type';

type AvatarShared = {
  size?: Size;
  corner?: Corner;
  color?: Color;
};

export interface AvatarBaseProps
  extends AvatarShared,
    Omit<ComponentPropsWithoutRef<'div'>, 'color'> {
  title: string;
}

export type AvatarImageProps = {
  variant: 'image';
  image?: string;
} & AvatarBaseProps;

export type AvatarIconProps = {
  variant: 'icon';
  icon?: ReactNode;
} & AvatarBaseProps;

export type AvatarProps = AvatarIconProps | AvatarImageProps;

type Direction = 'start-start' | 'start-end' | 'end-start' | 'end-end';

export type AvatarBadgeProps = {
  position?: Direction;
} & BadgeProps;

export interface AvatarGroupProps extends AvatarShared {
  limit?: number;
  variant?: 'stack' | 'grid';
  children: ReactNode;
}

export interface AvatarGroContextProps
  extends Omit<AvatarShared, 'style' | 'className'> {}
export interface AvatarGroupProviderProps extends AvatarGroContextProps {
  children: ReactNode;
}
