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
    <path d="M4 6h16M4 18h5m-5-6h13a3 3 0 0 1 0 6h-4m0 0 2-2m-2 2 2 2" />
  </svg>
);

export default justify;
