import React, { type SVGProps } from 'react';

const justify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M17 16a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0v-4a2 2 0 0 1 4 0M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2" />
  </svg>
);

export default justify;
