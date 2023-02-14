import React, { type SVGProps } from 'react';

const arc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M17 11.1a5 5 0 1 0-4.1 5.8M3 12a9 9 0 1 0 9-9m1 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
);

export default arc;
