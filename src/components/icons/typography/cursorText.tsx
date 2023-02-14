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
    <path d="M10 12h4M9 4a3 3 0 0 1 3 3m0 0v10m0-10a3 3 0 0 1 3-3m-3 13a3 3 0 0 1-3 3m3-3a3 3 0 0 0 3 3" />
  </svg>
);

export default justify;
