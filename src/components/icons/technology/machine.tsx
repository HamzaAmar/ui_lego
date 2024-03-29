import React, { type SVGProps } from 'react';

const machine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M16 14a4 4 0 0 1-8 0m8 0a4 4 0 0 0-8 0m8 0c-1.3.7-2.7.7-4 0a4.2 4.2 0 0 0-4 0m0-8h0m3 0h0m3 0h2M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </svg>
);

export default machine;
