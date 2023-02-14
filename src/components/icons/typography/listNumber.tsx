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
    <path d="M11 6h9m-9 6h9m-8 6h8M4 16a2 2 0 0 1 4 0c0 .6-.5 1-1 1.5L4 20h4M6 10V4L4 6" />
  </svg>
);

export default justify;
