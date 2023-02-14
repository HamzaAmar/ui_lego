import React, { type SVGProps } from 'react';
import { ROTATION } from '../../../utils/rotation';

interface ChevronProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof ROTATION;
}

const chevronDown = ({ direction = 'bottom', ...rest }: ChevronProps) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    transform={`rotate(${ROTATION[direction]})`}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    {...rest}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default chevronDown;
