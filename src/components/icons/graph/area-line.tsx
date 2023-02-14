import React, { type SVGProps } from 'react';

const area = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m4 12 3-4 4 2 5-6 4 4M4 19l4-6 4 2 4-5 4 4v5H4Z" />
  </svg>
);

export default area;
