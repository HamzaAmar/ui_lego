import { forwardRef } from 'react';

import { classnames } from '../../../utils/classnames';
import Spinner from '../spinner';

import { ButtonProps } from './button.type';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    color = 'primary',
    size = 'md',
    radius = 'sm',
    variant = 'contained',
    children,
    state = 'idle',
    icon,
    iconPosition = 'start',
    ...rest
  } = props;

  const isStartIcon = icon && iconPosition === 'start';
  const isEndIcon = icon && iconPosition === 'end';
  const isLoading = state === 'loading';

  const leftIcon = isStartIcon ? (
    <span className="btn--icon-wrapper">{icon}</span>
  ) : null;
  const rightIcon = isEndIcon ? (
    <span className="btn--icon-wrapper">{icon}</span>
  ) : null;

  const loadingUI = isLoading ? (
    <div className="btn__container-loading">
      <Spinner size="sm" />
      <span>loading...</span>
    </div>
  ) : null;

  const className = classnames(
    `btn btn__${size} btn__${variant} u_${color} u_radius__${radius}`,
    {
      ['btn__loading']: isLoading,
    },
  );

  const disableIfLoading = isLoading ? { disabled: true } : {};

  return (
    <button
      {...className}
      type="button"
      {...rest}
      {...disableIfLoading}
      ref={ref}
    >
      {leftIcon}
      {children}
      {rightIcon}
      {loadingUI}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
