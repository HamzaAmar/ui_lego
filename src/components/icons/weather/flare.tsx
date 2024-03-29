import React, { type SVGProps } from 'react';

const flare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 12h4m5-9v4m5 5h4m-9 5v4M7.5 7.5l1 1m8-1-1 1m0 7 1 1m-8-1-1 1M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
);

export default flare;
