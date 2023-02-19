/* eslint-disable no-underscore-dangle */
import { useId, forwardRef, useRef } from 'react';
import { ChevronDown, Eye, Search } from '../../icons';
import useBoolean from '../../../hooks/useBoolean';
import { classnames } from '../../../utils/classnames';
import { Flex } from '../layout';
import { useTextField } from './context';
import { composeRef } from '../../../utils/composeRef';

import type { InputProps, SelectProps, TextAreaProps } from './form.type';

export function getFormControlIds(id: string) {
  const labelId = `${id}-label`;
  const messageId = `${id}-message`;
  const hintId = `${id}-hint`;
  return { labelId, messageId, hintId };
}

/*
===================================================================================================
   TextArea Area Section
===================================================================================================
*/

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      corner = 'radius',
      variant = 'outline',
      prefixInput,
      isInvalid,
      size = 'md',
      fluid,
      id: propsId,
      ...restProps
    },
    forwardedRef,
  ) => {
    const fallbackId = useId();
    const { value, id = propsId ?? fallbackId, ...provider } = useTextField();

    const { labelId, messageId, hintId } = getFormControlIds(id);

    const prefixInputIfExist = !!prefixInput && (
      <span className="input-field--prefix u_flex-inline u_items-center u_justify-center">
        {prefixInput}
      </span>
    );

    const currentVal = restProps.value ?? value;
    const _className = classnames(
      `form-field-wrapper u_corner__${corner} form-field-wrapper__${variant} u_flex u_items-start u_spacing-xs`,
      { 'form-field-wrapper__fluid': fluid },
    );

    return (
      <span
        className={_className}
        data-disabled={restProps.disabled}
        data-invalid={isInvalid}
        data-readonly={restProps.readOnly}
      >
        {prefixInputIfExist}

        <textarea
          ref={forwardedRef}
          id={labelId}
          aria-describedby={`${messageId} ${hintId}`}
          {...restProps}
          {...provider}
          className={`form-field textarea__${size}`}
        >
          {currentVal}
        </textarea>
      </span>
    );
  },
);

/*
===================================================================================================
   Input Area Section
===================================================================================================
*/

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      corner = 'radius',
      variant = 'outline',
      prefixInput,
      suffixInput,
      isInvalid,
      size = 'md',
      fluid,
      id: propsId,
      ...restProps
    },
    forwardedRef,
  ) => {
    const fallbackId = useId();
    const { id = propsId ?? fallbackId, ...provider } = useTextField();
    const { labelId, messageId, hintId } = getFormControlIds(id);

    const prefixInputIfExist = !!prefixInput && (
      <span className="input-field--prefix u_flex-inline u_items-center u_justify-center">
        {prefixInput}
      </span>
    );
    const suffixInputIfExist = !!suffixInput && (
      <span className="input-field--suffix u_flex-inline u_items-center u_justify-center">
        {suffixInput}
      </span>
    );

    const _className = classnames(
      `form-field-wrapper   u_corner__${corner} form-field-wrapper__${variant} u_flex`,
      {
        'form-field-wrapper__fluid': !!fluid,
      },
    );

    return (
      <div
        className={_className}
        data-disabled={restProps.disabled}
        data-invalid={isInvalid}
        data-readonly={restProps.readOnly}
      >
        {prefixInputIfExist}
        <input
          type="text"
          ref={forwardedRef}
          id={labelId}
          aria-describedby={`${messageId} ${hintId}`}
          {...restProps}
          {...provider}
          className={`form-field input__${size}`}
        />
        {suffixInputIfExist}
      </div>
    );
  },
);

/*
===================================================================================================
   InputNumber Area Section
===================================================================================================
*/

export const InputNumber = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      isInvalid,
      corner = 'radius',
      variant = 'outline',
      id: propsId,
      ...restProps
    },
    forwardedRef,
  ) => {
    const fallbackId = useId();
    const { id = propsId ?? fallbackId, ...provider } = useTextField();
    const { labelId, messageId, hintId } = getFormControlIds(id);

    const inputRef = useRef<HTMLInputElement>(null);

    const ref = composeRef(inputRef, forwardedRef);

    const wrapperClassName = `form-field-wrapper  u_corner__${corner} form-field-wrapper__${variant} u_flex u_spacing-xs`;

    return (
      <div
        className={wrapperClassName}
        data-disabled={restProps.disabled}
        data-invalid={isInvalid}
        data-readonly={restProps.readOnly}
      >
        <input
          type="number"
          ref={ref}
          id={labelId}
          aria-describedby={`${messageId} ${hintId}`}
          {...restProps}
          {...provider}
          className={`form-field input__${size}`}
        />
        <Flex direction="column" className="input-number--counter-wrapper">
          <button
            onClick={() => {
              inputRef.current?.focus();
              inputRef.current?.stepUp();
            }}
            tabIndex={-1}
            className="number-input--button"
            type="button"
          >
            <ChevronDown height="90%" direction="top" />
          </button>

          <button
            onClick={() => {
              inputRef.current?.focus();
              inputRef.current?.stepDown();
            }}
            tabIndex={-1}
            className="number-input--button"
            type="button"
          >
            <ChevronDown height="90%" />
          </button>
        </Flex>
      </div>
    );
  },
);

/*
===================================================================================================
   Input Password Area Section
===================================================================================================
*/

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      corner = 'radius',
      isInvalid,
      id: idProps,
      ...restProps
    },
    forwardedRef,
  ) => {
    const fallbackId = useId();
    const { id = idProps ?? fallbackId, ...provider } = useTextField();
    const { labelId, messageId, hintId } = getFormControlIds(id);

    const { state: showPassword, handleToggle } = useBoolean(false);
    const type = showPassword ? 'text' : 'password';
    const wrapperClassName = `form-field-wrapper  u_corner__${corner} form-field-wrapper__${variant} u_flex u_spacing-xs`;

    return (
      <div
        className={wrapperClassName}
        data-disabled={restProps.disabled}
        data-invalid={isInvalid}
        data-readonly={restProps.readOnly}
      >
        <input
          type={type}
          ref={forwardedRef}
          id={labelId}
          aria-describedby={`${messageId} ${hintId}`}
          {...restProps}
          {...provider}
          className={`form-field input__${size}`}
        />

        <button
          type="button"
          onClick={handleToggle}
          className="password-input--button"
        >
          {showPassword ? <Eye height="16" /> : <Eye height="16" />}
        </button>
      </div>
    );
  },
);

/*
===================================================================================================
   Input Password Area Section
===================================================================================================
*/

export const InputSearch = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      corner = 'radius',
      isInvalid,
      id: idProps,
      ...restProps
    },
    forwardedRef,
  ) => {
    const fallbackId = useId();
    const { id = idProps ?? fallbackId, ...provider } = useTextField();
    const { labelId, messageId, hintId } = getFormControlIds(id);

    const wrapperClassName = `form-field-wrapper  u_corner__${corner} form-field-wrapper__${variant} u_flex u_spacing-xs`;

    return (
      <div className={wrapperClassName}>
        <input
          type="search"
          ref={forwardedRef}
          id={labelId}
          aria-describedby={`${messageId} ${hintId}`}
          {...restProps}
          {...provider}
          className={`form-field form-field__search input__${size}`}
        />
        <Search
          className="search-field--icon"
          width="1.25em"
          stroke="var(--slate-11)"
          transform="translate(-8,0)"
        />
      </div>
    );
  },
);

/*
===================================================================================================
   Select Section
===================================================================================================
*/

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      corner = 'radius',
      isInvalid,
      id: idProps,
      children,
      ...restProps
    },
    forwardedRef,
  ) => {
    const fallbackId = useId();
    const { id = idProps ?? fallbackId, ...provider } = useTextField();
    const { labelId, messageId, hintId } = getFormControlIds(id);

    const wrapperClassName = `form-field-wrapper  u_corner__${corner} form-field-wrapper__${variant} u_flex u_spacing-xs`;

    return (
      <div
        className={wrapperClassName}
        data-disabled={restProps.disabled}
        data-invalid={isInvalid}
      >
        <select
          ref={forwardedRef}
          id={labelId}
          aria-describedby={`${messageId} ${hintId}`}
          {...restProps}
          {...provider}
          className={`form-field select-field input__${size}`}
        >
          {children}
        </select>

        <span className="select-chevron">
          <ChevronDown width={16} />
        </span>
      </div>
    );
  },
);

/*
===================================================================================================
   Input File Section
===================================================================================================
*/

export const InputFile = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      corner = 'radius',
      isInvalid,
      id: idProps,
      children,
      title = 'Choose File',
      ...restProps
    },
    forwardedRef,
  ) => {
    const fallbackId = useId();
    const { id = idProps ?? fallbackId, ...provider } = useTextField();
    const { labelId, messageId, hintId } = getFormControlIds(id);
    const inputRef = useRef<HTMLInputElement>(null);
    const composedRef = composeRef(inputRef, forwardedRef);
    const wrapperClassName = `form-field-wrapper  u_corner__${corner} form-field-wrapper__${variant} u_flex u_spacing-xs`;

    return (
      <div className={wrapperClassName}>
        <div>
          <input
            type="file"
            ref={composedRef}
            id={labelId}
            aria-describedby={`${messageId} ${hintId}`}
            {...restProps}
            {...provider}
            className="u_visually-hidden"
          />
          {children}
        </div>

        <Flex
          as="span"
          items="center"
          onClick={() => inputRef.current?.click()}
          className={`input-file input__${size}`}
        >
          {title}
        </Flex>
      </div>
    );
  },
);
