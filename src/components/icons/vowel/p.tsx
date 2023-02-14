import React, { type SVGProps } from 'react';

const P = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M7 20V4h5.5a4.5 4.5 0 1 1 0 9H7" />
  </svg>
);

export default P;
