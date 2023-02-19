import { classnames } from '../../../utils/classnames';
import { Flex } from '..';

import type { FormGroupProps } from './form.type';

const formGroup = ({
  title,
  showLabel,
  direction = 'column',
  children,
  fluid,
  showBorder,
}: FormGroupProps) => {
  return (
    <fieldset
      className={classnames('form-group--container', {
        'form-group--border': showBorder,
      })}
    >
      <legend
        className={classnames('form-group--legend', {
          'u_visually-hidden': !showLabel,
        })}
      >
        {title}
      </legend>
      <Flex
        wrap
        gap="sm"
        className={classnames('form-group', { 'form-group--fluid': fluid })}
        items="start"
        direction={direction}
      >
        {children}
      </Flex>
    </fieldset>
  );
};

export default formGroup;
