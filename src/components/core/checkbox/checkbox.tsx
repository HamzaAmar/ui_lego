// Disabled State Label And Box

import { useEffect, useRef, forwardRef, useId } from 'react';

import { Check, Minus } from '../../icons';
import { classnames } from '../../../utils/classnames';
import { composeRef } from '../../../utils/composeRef';

import type { CheckboxProps } from './checkbox.type';
import { ForwardRefComponent } from '../../../types/polymorphic';

const Checkbox = forwardRef((props, forwardedRef) => {
  const fallbackID = useId();
  const {
    name,
    label,
    size = 'md',
    color = 'primary',
    showLabel,
    isIndeterminate,
    checked,
    id = fallbackID,
    ...rest
  } = props;

  const checkboxRef = useRef<HTMLInputElement>(null);
  const ref = composeRef(checkboxRef, forwardedRef);

  const checkboxIcon =
    isIndeterminate && props.checked == null ? (
      <Minus aria-hidden="true" focusable="false" className="checkbox--check" />
    ) : (
      <Check aria-hidden="true" focusable="false" className="checkbox--check" />
    );

  useEffect(() => {
    if (checkboxRef.current) {
      if (isIndeterminate) {
        checkboxRef.current.indeterminate = Boolean(isIndeterminate);
      }
    }
  }, [isIndeterminate]);

  return (
    <label
      className={`checkbox checkbox__${size} u_${color}`}
      data-disabled={props.disabled}
      htmlFor={id}
    >
      <input
        type="checkbox"
        className="u_visually-hidden checkbox--element"
        name={name}
        aria-checked={isIndeterminate && 'mixed'}
        id={id}
        {...rest}
        ref={ref}
      />
      <span className="checkbox--indicator">{checkboxIcon}</span>
      <div
        className={classnames('checkbox--label', {
          'u_visually-hidden': showLabel,
        })}
      >
        {label}
      </div>
    </label>
  );
}) as ForwardRefComponent<'input', CheckboxProps>;

export default Checkbox;
