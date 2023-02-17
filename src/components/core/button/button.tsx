import { forwardRef } from 'react';

import { classnames } from '../../../utils/classnames';
import { Flex, Spinner } from '..';

import { ButtonProps, IconButtonProps } from './button.type';
import { ForwardRefComponent } from '../../../types/polymorphic';

/*
=================================================================================================
    Button section
=================================================================================================
*/

export const Button = forwardRef((props, ref) => {
  const {
    color = 'primary',
    size = 'md',
    corner = 'sm',
    variant = 'solid',
    children,
    state = 'idle',
    icon,
    iconPosition = 'start',
    ...rest
  } = props;

  const isStartIcon = icon && iconPosition === 'start';
  const isEndIcon = icon && iconPosition === 'end';
  const isLoading = state === 'loading';

  const className = classnames(
    `btn
     btn__${size}
     btn__${variant}
     u_${color}
     u_corner__${corner}`,
    {
      ['btn__loading']: isLoading,
    },
  );

  const disabledProps = isLoading ? { disabled: true } : {};

  return (
    <button
      className={className}
      type="button"
      {...rest}
      {...disabledProps}
      ref={ref}
    >
      {isStartIcon && <span className="btn--icon-wrapper">{icon}</span>}
      {children}
      {isEndIcon && <span className="btn--icon-wrapper">{icon}</span>}
      {isLoading && (
        <Flex
          items="center"
          justify="center"
          gap="xs"
          className="btn__container-loading"
        >
          <Spinner size="sm" />
          <span>loading...</span>
        </Flex>
      )}
    </button>
  );
}) as ForwardRefComponent<'button', ButtonProps>;

Button.displayName = 'Button';

/*
=================================================================================================
    Icon button section
=================================================================================================
*/

export const IconButton = forwardRef(
  (
    {
      icon,
      title,
      corner = 'sharp',
      color = 'primary',
      size = 'md',
      variant = 'transparent',
      className,
      as: Tag = 'button',
      ...rest
    },
    forwardedRef,
  ) => {
    const iconButtonClassName = classnames(
      `icon-button btn__${size} btn__${variant} l_corner-${corner} u_${color}`,
      className,
    );

    return (
      <Tag
        aria-label={title}
        className={iconButtonClassName}
        ref={forwardedRef}
        {...rest}
      >
        <Flex as="span" items="center" justify="center">
          {icon}
        </Flex>
      </Tag>
    );
  },
) as ForwardRefComponent<'button', IconButtonProps>;

IconButton.displayName = 'Icon Button';
