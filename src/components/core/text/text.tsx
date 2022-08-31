// this classnames is a little bit different than the the classic one it return obj not a string
import { CSSProperties } from 'react';
import { classnames } from '../../../utils/classnames';
import type { TextProps } from './text.type';

const text = (props: TextProps) => {
  const {
    size = 'md',
    truncate,
    as: Comp = 'p',
    weight = 'normal',
    className,
    children,
    transform,
    align,
    color,
  } = props;

  /* 
      Every className that is Prefixed with u_ is a utility class and you can find it in 
      /src/scss/utilities folder
  */

  const classNameStyle = classnames(
    `text text__${size} text__${color} u_weight__${weight}`,
    {
      [`u_${truncate}`]: Boolean(truncate),
      [`${className}`]: Boolean(className),
      [`u_transform__${transform}`]: Boolean(transform),
      [`u_align__${align}`]: Boolean(align),
    },
  );

  const styleOnlyExistOnTruncateMultiLine =
    truncate === 'multiline'
      ? { style: { '--line-numbers': props.numberLine } as CSSProperties }
      : {};

  return (
    <Comp
      {...styleOnlyExistOnTruncateMultiLine}
      {...styleOnlyExistOnTruncateMultiLine}
      {...classNameStyle}
    >
      {children}
    </Comp>
  );
};

export default text;
