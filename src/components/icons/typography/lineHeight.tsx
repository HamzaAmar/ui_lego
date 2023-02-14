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
    <path d="m3 8 3-3m0 0 3 3M6 5v14m-3-3 3 3m0 0 3-3m4-10h7m-7 6h7m-7 6h7" />
  </svg>
);

export default justify;
