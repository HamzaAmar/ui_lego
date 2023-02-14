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
    <path d="M3 19V8.5a3.5 3.5 0 1 1 7 0V19m-7-6h7m4 6V8.5a3.5 3.5 0 1 1 7 0V19m-7-6h7" />
  </svg>
);

export default justify;
