import React, { type SVGProps } from 'react';

const Ethereum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m6 12 6-9 6 9M6 12l6 9 6-9M6 12l6-3 6 3M6 12l6 2 6-2" />
  </svg>
);

export default Ethereum;
