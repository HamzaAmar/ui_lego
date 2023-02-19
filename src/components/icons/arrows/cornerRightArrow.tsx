import React, { type SVGProps } from 'react';
import { ROTATION } from '../../../utils/rotation';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof ROTATION;
  reverse?: boolean;
}

const cornerRightArrow = ({
  direction = 'bottom',
  reverse = false,
  ...rest
}: ArrowProps) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    transform={`${ROTATION[direction]} scale(${reverse ? '-1' : '1'})`}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...rest}
  >
    <path d="M6 6h6a3 3 0 0 1 3 3v10m0 0-4-4m4 4 4-4" />
  </svg>
);

export default cornerRightArrow;
