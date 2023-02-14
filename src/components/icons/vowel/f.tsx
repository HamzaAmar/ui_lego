import React, { type SVGProps } from 'react';

const F = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M17 4H7v16m0-8h8" />
  </svg>
);

export default F;
