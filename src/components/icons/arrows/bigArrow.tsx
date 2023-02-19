import React, { type SVGProps } from 'react';
import { ROTATION } from '../../../utils/rotation';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof ROTATION;
}

const bigArrow = ({ direction = 'bottom', ...rest }: ArrowProps) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    transform={`rotate(${ROTATION[direction]})`}
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path d="M15 4v8h3.6a1 1 0 0 1 .7 1.7l-6.6 6.6a1 1 0 0 1-1.4 0l-6.6-6.6a1 1 0 0 1 .7-1.7H9V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z" />
  </svg>
);

export default bigArrow;
