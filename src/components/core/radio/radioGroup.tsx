/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { forwardRef } from 'react';
import { classnames } from '../../../utils/classnames';
import { RadioProvider } from './context';
import type { RadioGroupProps } from './radio.type';

const radioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    { direction = 'horizontal', children, label, showLabel, id, ...rest },
    forwardedRef,
  ) => {
    // TODO: ADD ERROR ACCESSIBILITY
    return (
      <fieldset
        role="radiogroup"
        className={`radio-group radio-group--${direction}`}
        ref={forwardedRef}
        id={id}
      >
        <legend className={classnames({ 'u_visually-hidden': !showLabel })}>
          {label}
        </legend>

        {/* TODO: ADD DEFAULT  TO RADIO GROUP */}
        <RadioProvider {...rest}>{children}</RadioProvider>
      </fieldset>
    );
  },
);

radioGroup.displayName = 'RadioGroup';

export default radioGroup;
