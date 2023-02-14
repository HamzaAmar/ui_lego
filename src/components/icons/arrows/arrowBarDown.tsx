import React, { type SVGProps } from 'react';
import { ROTATION } from '../../../utils/rotation';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof ROTATION;
}

const arrowBarDown = ({ direction = 'bottom', ...rest }: ArrowProps) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    transform={`rotate(${ROTATION[direction]})`}
    fill="none"
    {...rest}
  >
    <path d="M12 20V10m0 10 4-4m-4 4-4-4M4 4h16" />
  </svg>
);

export default arrowBarDown;
