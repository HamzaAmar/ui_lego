import React, { type SVGProps } from 'react';
import { ROTATION } from '../../../utils/rotation';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof ROTATION;
}

const arrow = ({ direction = 'bottom', ...rest }: ArrowProps) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    transform={`rotate(${ROTATION[direction]})`}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d="M12 5v14m0 0 4-4m-4 4-4-4" />
  </svg>
);

export default arrow;
