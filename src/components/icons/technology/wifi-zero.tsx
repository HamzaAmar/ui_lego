import React, { type SVGProps } from 'react';

const tv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M9 6h6M9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3M9 6V3h6v3m0 0a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3m0 0H9m6 0v3H9v-3" />
  </svg>
);

export default tv;
