export type Color =
  | 'primary'
  | 'indigo'
  | 'danger'
  | 'warning'
  | 'success'
  | 'yellow'
  | 'mint'
  | 'slate'
  | 'purple'
  | 'red'
  | 'green'
  | 'orange'
  | 'brown'
  | 'violet';

export type Size = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type Variant = 'solid' | 'outline' | 'soft' | 'transparent';
export type Corner = 'full' | 'sharp' | Size;
export type Direction = 'horizontal' | 'vertical';
export type Rotation =
  | 'bottom'
  | 'top'
  | 'right'
  | 'left'
  | 'left-top'
  | 'left-bottom'
  | 'right-bottom'
  | 'right-top';
