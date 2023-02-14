import React, { type SVGProps } from 'react';

const E = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M17 4H7v16h10M7 12h8" />
  </svg>
);

export default E;
