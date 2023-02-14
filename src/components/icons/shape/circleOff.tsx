import React, { type SVGProps } from 'react';

const circleOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20 16A9 9 0 0 0 8 4M5.6 5.6a9 9 0 1 0 12.8 12.8M3 3l18 18" />
  </svg>
);

export default circleOff;
