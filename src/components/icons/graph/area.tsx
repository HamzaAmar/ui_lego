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
    <path d="M4 19h16M4 15l4-6 4 2 4-5 4 4v5H4Z" />
  </svg>
);

export default area;
