import React, { type SVGProps } from 'react';

const U = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5V4" />
  </svg>
);

export default U;
