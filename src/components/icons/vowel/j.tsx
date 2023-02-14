import React, { type SVGProps } from 'react';

const J = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M17 4v12a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4" />
  </svg>
);

export default J;
