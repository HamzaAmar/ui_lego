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
    <path d="M18.5 18.5 21 21M4 6h16M4 12h4m-4 6h4m11-3a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
);

export default justify;
