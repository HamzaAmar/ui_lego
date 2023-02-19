import type { Color, Size } from '../../../types/utils';

interface ProgressCoreProps {
  color?: Color;
  size?: Size;
  label: string;
  showLabel?: boolean;
  value: number;
}

export interface ProgressBarProps extends ProgressCoreProps {}
export interface ProgressCircleProps extends ProgressCoreProps {}
