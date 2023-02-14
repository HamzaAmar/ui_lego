import React, { type SVGProps } from 'react';

const B = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M13 12a4 4 0 1 0 0-8H7v16h6a4 4 0 1 0 0-8Zm0 0H7" />
  </svg>
);

export default B;
