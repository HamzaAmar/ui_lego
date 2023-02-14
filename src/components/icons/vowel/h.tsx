import React, { type SVGProps } from 'react';

const H = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M17 4v16M7 12h10M7 4v16" />
  </svg>
);

export default H;
