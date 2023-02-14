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
    <path d="M16 15v-3.5a2.5 2.5 0 0 1 5 0V15m0-2h-5M3 9l3 6 3-6m0 11 6-16" />
  </svg>
);

export default justify;
