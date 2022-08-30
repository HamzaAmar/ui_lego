type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Color =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
  | 'purple';

interface BadgeBaseProps {
  size?: Size;
  color?: Color;
  className?: string;
}

interface BadgeNumericProps extends BadgeBaseProps {
  variant: 'numeric';
  value: number;
  max?: number;
}

interface BadgeDotProps extends BadgeBaseProps {
  variant: 'dot';
}

export type BadgeProps = BadgeNumericProps | BadgeDotProps;
