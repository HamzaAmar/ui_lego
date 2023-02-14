import React, { type SVGProps } from 'react';

const justify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M4 6h9m-9 6h7m-7 6h7m4-3 3 3m0 0 3-3m-3 3V6" />
  </svg>
);

export default justify;
