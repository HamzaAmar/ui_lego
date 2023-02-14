import React, { type SVGProps } from 'react';

const D = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7V4Z" />
  </svg>
);

export default D;
