import React, { type SVGProps } from 'react';

const x = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default x;
