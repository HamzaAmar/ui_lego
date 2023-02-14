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
    <path d="M6 18V6h4a4 4 0 0 1 4 4v4m4-8v12h-4a4 4 0 0 1-4-4v-4" />
  </svg>
);

export default ripple;
