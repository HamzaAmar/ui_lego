import React, { type SVGProps } from 'react';

const computerCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M17.8 13.8a7 7 0 0 0-9.7-9.6m6.8 6.7A3 3 0 0 0 11 7M8 16l-2 3.5a1 1 0 0 0 .8 1.5h10.4a1 1 0 0 0 .9-1.5L16 16M3 3l18 18M6.1 6.2a7 7 0 0 0 9.7 9.6L6.1 6.2Zm3 3a3 3 0 0 0 3.8 3.7L9 9Z" />
  </svg>
);

export default computerCamera;
