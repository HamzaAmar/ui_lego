import type { ReactNode } from 'react';

import type { Corner, Size } from '../../../types/utils';

export interface SkeletonBase {
  children: ReactNode;
  isLoading: boolean;
}
export interface SkeletonAvatarProps extends SkeletonBase {
  size?: Size;
  corner?: Corner;
}
export interface SkeletonTextProps extends SkeletonBase {
  size?: Size;
  lines?: number;
}
export interface SkeletonButtonProps extends SkeletonBase {
  size?: Size;
}
export interface SkeletonProps extends SkeletonBase {
  height?: string;
}
