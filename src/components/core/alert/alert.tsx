import { forwardRef } from 'react';
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
  const {
    type = 'danger',
    showIcon,
    message,
    title,
    inline,
    variant = 'solid',
    corner = 'md',
    className,
    ...rest
  } = props;
  const { state, handleTrue } = useBoolean(false);

  if (state) {
    return null;
  }
  const _className = classnames(
    `alert alert__${variant} u_${type} l_corner-${corner}`,
    { className },
  );

  const inlineText = !inline ? { direction: 'column' as const } : {};

  return (
    <Flex
      ref={forwardedRef}
      gap="2xs"
      justify="between"
      items="start"
      className={_className}
      role="alert"
      {...rest}
    >
      <Flex items="start" gap="sm">
        {showIcon && (
          <span className="u_items-self u_leading__normal">{icons[type]}</span>
        )}
        <Flex {...inlineText} justify="center">
          {Boolean(title) && (
            <Text transform="capitalize" leading="md" size="sm" weight="medium">
              {title}
            </Text>
          )}
          {message && (
            <Text as="span" size="xs">
              {message}
            </Text>
          )}
        </Flex>
      </Flex>
      <IconButton
        size="xs"
        corner="full"
        onClick={handleTrue}
        icon={<Close />}
        title="close title"
        variant="soft"
        color="slate"
      />
    </Flex>
  );
}) as ForwardRefComponent<'div', AlertProps>;

export default Alert;
