import React, { type SVGProps } from 'react';
import { ROTATION } from '../../../utils/rotation';

interface ChevronProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof ROTATION;
}

const chevronsDown = ({ direction = 'bottom', ...rest }: ChevronProps) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    transform={`rotate(${ROTATION[direction]})`}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path d="m7 7 5 5 5-5M7 13l5 5 5-5" />
  </svg>
);

export default chevronsDown;
