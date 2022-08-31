import type { CSSProperties } from 'react';
import { classnames } from '../../../utils/classnames';

import type { HeadingProps } from './heading.type';

const heading = (props: HeadingProps) => {
  const {
    children,
    size = 'md',
    classNames,
    as: Comp = 'h2',
    align,
    transform,
    truncate,
    weight = 'bold',
  } = props;
  const styleOnlyExistOnTruncateMultiLine =
    truncate === 'multiline'
      ? { style: { '--line-numbers': props.numberLine } as CSSProperties }
      : {};

  /* 
      Every className that is Prefixed with u_ is a utility class and you can find it in 
      /src/scss/utilities folder
  */

  const className = classnames(`heading heading__${size} u_${weight}`, {
    [classNames!]: Boolean(classNames),
    [`u_${truncate}`]: Boolean(truncate),
    [`u_transform__${transform}`]: Boolean(transform),
    [`u_align__${align}`]: Boolean(align),
  });
  return (
    <Comp {...styleOnlyExistOnTruncateMultiLine} {...className}>
      {children}
    </Comp>
  );
};

export default heading;
