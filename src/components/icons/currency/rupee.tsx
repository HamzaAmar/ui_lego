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
    <path d="M18 5H7h3a4 4 0 1 1 0 8H7l6 6M7 9h11" />
  </svg>
);

export default ripple;
