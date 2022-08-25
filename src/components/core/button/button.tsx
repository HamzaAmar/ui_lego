import React from 'react';
import type { ButtonProps } from './button.type';

const button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button className="btn" {...rest} type="button">
      {children}
    </button>
  );
};

export default button;
