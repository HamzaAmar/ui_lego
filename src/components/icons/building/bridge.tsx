import React, { type SVGProps } from 'react';

const bridge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M6 5v14M18 5v14M2 15h20M3 8a7.5 7.5 0 0 0 3-2 6.5 6.5 0 0 0 6 4m0 0a6.5 6.5 0 0 0 6-4c.8.9 1.9 1.6 3 2m-9 2v5" />
  </svg>
);

export default bridge;
