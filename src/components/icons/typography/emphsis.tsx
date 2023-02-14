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
    <path d="M15 10H8M6 20v0m4 0v0m4 0v0m4 0v0M16 5H8v10h8V5Z" />
  </svg>
);

export default justify;
