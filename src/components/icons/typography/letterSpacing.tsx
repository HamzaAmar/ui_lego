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
    <path d="M10 8H5m8-4 3 8 3-8M5 18h14M5 18l2-2m-2 2 2 2m12-2-2 2m2-2-2-2M5 12V6.5a2.5 2.5 0 1 1 5 0V12H5Z" />
  </svg>
);

export default justify;
