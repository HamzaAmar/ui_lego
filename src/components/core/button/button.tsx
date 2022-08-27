import React from 'react';
  import type { ButtonProps } from './button.type';

  const Button = ({ children, ...rest }: ButtonProps) => {
    return (
      <div className="button" {...rest}>
        {children}
      </div>
    );
  };

  export default Button;