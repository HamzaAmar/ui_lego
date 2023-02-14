import React, { type SVGProps } from 'react';
import { ROTATION } from '../../../utils/rotation';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof ROTATION;
}

const arrowCircle = ({ direction = 'bottom', ...rest }: ArrowProps) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    transform={`rotate(${ROTATION[direction]})`}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    <path d="m8 12 4 4m0 0V8m0 8 4-4m5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default arrowCircle;
