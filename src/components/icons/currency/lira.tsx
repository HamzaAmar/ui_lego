import React, { type SVGProps } from 'react';

const lira = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M10 5v15a7 7 0 0 0 7-7M6 15l8-4m0-4-8 4" />
  </svg>
);

export default lira;
