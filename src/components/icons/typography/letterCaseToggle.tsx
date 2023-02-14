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
    <path d="M14 19V8.5a3.5 3.5 0 1 1 7 0V19m-7-6h7m-11-1v7m0-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </svg>
);

export default justify;
