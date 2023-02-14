import React, { type SVGProps } from 'react';

const A = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M7 20V8a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v12M7 13h10" />
  </svg>
);

export default A;
