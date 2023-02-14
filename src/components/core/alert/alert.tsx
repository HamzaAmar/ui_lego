import { forwardRef, useId } from 'react';
import { ForwardRefComponent } from '../../../types/polymorphic';
import { classnames } from '../../../utils/classnames';
import {
  Close,
  Info,
  CircleAlert,
  CircleClose,
  CircleCheck,
} from '../../icons';
import useBoolean from '../../../hooks/useBoolean';
import { Flex, Text, IconButton } from '..';

import type { AlertProps, IconsStatus } from './alert.type';

const icons: IconsStatus = {
  info: <Info width="24" />,
  danger: <CircleClose width="24" />,
  success: <CircleCheck width="24" />,
  warning: <CircleAlert type="circle" width="24" />,
};

const Alert = forwardRef((props, forwardedRef) => {
  const fallbackID = useId();
  const {
    type = 'danger',
    showIcon,
    message,
    title,
    inline,
    variant = 'solid',
    corner = 'md',
    id = fallbackID,
    className,
    ...rest
  } = props;
  const { state, handleTrue } = useBoolean(false);

  const inlineText = !inline
    ? ({ direction: 'column' } as { direction: 'column' })
    : {};

  if (state) {
    return null;
  }
  const alertClassName = classnames(
    `alert alert__${variant} u_${type} l_corner-${corner}`,
    { className },
  );
  return (
    <Flex
      gap="2xs"
      justify="between"
      items="start"
      className={alertClassName}
      id={id}
      role="alert"
      aria-labelledby={`title_${id}`}
      aria-describedby={`description_${id}`}
      ref={forwardedRef}
      {...rest}
    >
      <Flex items="start" gap="sm">
        {showIcon && (
          <span className="u_items-self u_leading__normal">{icons[type]}</span>
        )}
        <Flex {...inlineText} justify="center">
          {Boolean(title) && (
            <Text
              id={`title_${id}`}
              transform="capitalize"
              leading="md"
              size="sm"
              weight="medium"
            >
              {title}
            </Text>
          )}
          <Text id={`description_${id}`} as="span" size="xs">
            {message}
          </Text>
        </Flex>
      </Flex>
      <IconButton
        size="xs"
        onClick={handleTrue}
        icon={<Close />}
        title="close title"
      />
    </Flex>
  );
}) as ForwardRefComponent<'div', AlertProps>;

export default Alert;
