import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { Corner, Size } from '../../../types/utils';

type Variant = 'filled' | 'outline';
type Status = 'danger' | 'success' | 'warning' | 'primary' | 'text';
type Direction = 'row' | 'column';

interface SharedProps {
  required?: boolean;
  disabled?: boolean;
  value?: any;
  maxLength?: number | undefined;
  children: ReactNode;
  status?: Status;
  id: string;
}

export interface FormGroupProps {
  title: string;
  showLabel?: boolean;
  children: ReactNode;
  direction?: Direction;
  fluid?: boolean;
  showBorder?: boolean;
}

export interface SelectProps
  extends Omit<ComponentPropsWithRef<'select'>, 'size'> {
  corner?: Corner;
  size?: Size;
  fluid?: boolean;
  isInvalid?: boolean;
  variant?: Variant;
  status?: Status;
}

export interface InputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  variant?: Variant;
  corner?: Corner;
  status?: Status;
  size?: Size;
  className?: string;
  prefixInput?: ReactNode | string;
  suffixInput?: ReactNode | string;
  isInvalid?: boolean;
  fluid?: boolean;
}
export interface TextAreaProps extends ComponentPropsWithRef<'textarea'> {
  variant?: Variant;
  corner?: Corner;
  className?: string;
  prefixInput?: ReactNode | string;
  suffixInput?: ReactNode | string;
  isInvalid?: boolean;
  status?: Status;
  fluid?: boolean;
  size?: Size;
}

export interface TextFormFieldProps extends Omit<SharedProps, 'id'> {
  label: string;
  message?: string;
  trailingIcon?: ReactNode;
  leadingIcon?: ReactNode;
  className?: string;
  hint?: string;
  hideLabel?: boolean;
  readOnly?: boolean;
  id?: string;
  isInvalid?: boolean;
}

export type StatusType = Record<Status, ReactNode | string>;

export type TextFieldGroupContextProps = Omit<SharedProps, 'children'>;
export type TextFieldProviderProps = SharedProps;

export interface FormControllerMaxProps {
  maxLength: number;
  value: number;
}

export interface FormControllerInfoPopupProps {
  children: ReactNode;
}
