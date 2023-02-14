import React, { type SVGProps } from 'react';

const K = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M7 4v16m0-8h2m0 0 8-8m-8 8 8 8" />
  </svg>
);

export default K;
