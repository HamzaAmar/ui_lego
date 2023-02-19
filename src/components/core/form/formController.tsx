import { useId } from 'react';
import { classnames } from '../../../utils/classnames';
import { Check, CircleAlert, Info } from '../../icons';
import { Text, Flex } from '..';
import { TextFieldProvider, useTextField } from './context';

import type {
  TextFormFieldProps,
  StatusType,
  FormControllerMaxProps,
} from './form.type';
import { getFormControlIds } from './formField';

const statusType: StatusType = {
  text: '',
  danger: <CircleAlert type="circle" width="20" />,
  primary: <Info width="20" />,
  success: <Check width="20" />,
  warning: <CircleAlert type="circle" width="20" />,
};

export const FormControllerMax = ({
  maxLength,
  value,
}: FormControllerMaxProps) => {
  return (
    <span className="message--length">
      {value ?? 0} / {maxLength}
    </span>
  );
};

export const FormControllerLabel = ({ hideLabel, label }: any) => {
  const { required, id } = useTextField();
  return (
    <Text
      as="label"
      size="xs"
      transform="capitalize"
      color="slate"
      htmlFor={id}
      className={classnames({
        'u_visually-hidden': hideLabel,
      })}
    >
      {label}
      <span>{required && '*'}</span>
    </Text>
  );
};

// TODO: Generate ID If its not exist

export const FormController = (props: TextFormFieldProps) => {
  const fallbackId = useId();
  const {
    children,
    status = 'text',
    value,
    required,
    disabled,
    maxLength,
    className,
    readOnly,
    hint,
    label,
    hideLabel,
    message,
    isInvalid,
    id = fallbackId,
  } = props;

  const { labelId, hintId, messageId } = getFormControlIds(id);

  const contextValue = {
    value,
    maxLength,
    required,
    disabled,
    status,
    id,
    readOnly,
  };

  return (
    <Flex
      direction="column"
      gap="2xs"
      as="div"
      className={classnames('text-field--root', {
        [className!]: Boolean(className),
      })}
      data-disabled={disabled}
      data-readonly={readOnly}
      data-invalid={isInvalid}
    >
      <div>
        <Text
          as="label"
          size="sm"
          transform="capitalize"
          htmlFor={labelId}
          weight="medium"
          className={classnames({
            'u_visually-hidden': hideLabel,
          })}
        >
          {label}
          <span className="form-controller--required">{required && ' *'}</span>
        </Text>
        {!!hint && (
          <Text
            size="xs"
            contrast="low"
            id={hintId}
            transform="capitalize"
            color="slate"
          >
            {hint}
          </Text>
        )}
      </div>
      <TextFieldProvider {...contextValue}>{children}</TextFieldProvider>
      {!!message && (
        <Text
          id={messageId}
          className={`text-field--message-container u_${status}`}
          size="xs"
          color="red"
          contrast="low"
        >
          {statusType[status]} {message}
        </Text>
      )}
    </Flex>
  );
};
