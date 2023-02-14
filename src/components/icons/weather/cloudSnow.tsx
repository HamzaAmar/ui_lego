import React, { type SVGProps } from 'react';

const cloudSnow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M7 18c-1.2 0-2.4-.5-3.3-1.3-1-.9-1.4-2-1.4-3.2 0-1.2.5-2.3 1.4-3.2C4.6 9.5 5.7 9 7 9a5 5 0 0 1 2.4-3.2 6 6 0 0 1 4.2-.7 6 6 0 0 1 2 .7c.6.4 1.2.9 1.6 1.4.4.6.7 1.2.8 1.8v2h1a3.5 3.5 0 1 1 0 7m-8-3v0m0 3v0m0 3v0m4-4v0m0 3v0" />
  </svg>
);

export default cloudSnow;
