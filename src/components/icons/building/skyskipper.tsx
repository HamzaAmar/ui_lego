import React, { type SVGProps } from 'react';

const skySkipper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M3 21h18M5 21V7l8-4v18m6 0V11l-6-4M9 9v0m0 3v0m0 3v0m0 3v0" />
  </svg>
);

export default skySkipper;
