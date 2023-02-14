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
    <path d="m4 15 3 3m0 0 3-3m-3 3V6m12-1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0v3a2 2 0 0 1-2 2h-1.5m1.5 4a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-3a2 2 0 0 1 2-2Z" />
  </svg>
);

export default justify;
