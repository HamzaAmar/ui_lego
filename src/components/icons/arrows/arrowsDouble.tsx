import React, { type SVGProps } from 'react';
import { ROTATION } from '../../../utils/rotation';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof ROTATION;
}

const arrowsDouble = ({ direction = 'bottom', ...rest }: ArrowProps) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    transform={`rotate(${ROTATION[direction]})`}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d="M17 3v18m0-18 3 3m-3-3-3 3m-4 12-3 3m0 0-3-3m3 3V3" />
  </svg>
);

export default arrowsDouble;
