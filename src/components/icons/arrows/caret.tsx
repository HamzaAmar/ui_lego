import React, { type SVGProps } from 'react';
import { ROTATION } from '../../../utils/rotation';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof ROTATION;
}

const caret = ({ direction = 'bottom', ...rest }: ArrowProps) => (
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
    <path d="m6 9 6 6 6-6H6Z" />
  </svg>
);

export default caret;
