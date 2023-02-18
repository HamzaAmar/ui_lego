import { useId } from 'react';

import { classnames } from '../../../utils/classnames';
import { Flex, Text } from '..';
import { useRadioGroup } from './context';
import type { RadioProps } from './radio.type';

const Radio = (props: RadioProps) => {
  const provider = useRadioGroup();
  const fallbackID = `radio_${useId()}`;
  const {
    label,
    id = fallbackID,
    color = provider.color || 'primary',
    size = provider.size || 'md',
    name = provider.name,
    description,
    ...rest
  } = props;

  const radioClassName = classnames(`custom-radio u_circle`);
  return (
    <label className={`radio-container radio__${size} u_${color}`} htmlFor={id}>
      <input
        type="radio"
        name={name}
        className="radio u_visually-hidden"
        id={id}
        {...rest}
      />
      <span className={radioClassName} />
      <Flex direction="column">
        <span className="radio__label">{label}</span>
        <Text
          size="xs"
          color="slate"
          contrast="low"
          as="span"
          className="radio__label"
        >
          {description}
        </Text>
      </Flex>
    </label>
  );
};

export default Radio;
