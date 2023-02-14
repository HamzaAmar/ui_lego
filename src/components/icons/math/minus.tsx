import React, { type SVGProps } from 'react';

const minus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
  </svg>
);

export default minus;
