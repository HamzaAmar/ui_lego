import React, { type SVGProps } from 'react';

const W = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m4 4 4 16 4-14 4 14 4-16" />
  </svg>
);

export default W;
