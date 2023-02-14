import React, { type SVGProps } from 'react';

const ripple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M8 19V5h6a3 3 0 0 1 0 6H6m8 4H6" />
  </svg>
);

export default ripple;
