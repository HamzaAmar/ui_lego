import React, { type SVGProps } from 'react';

const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m7 4 10 16m0-16L7 20" />
  </svg>
);

export default X;
