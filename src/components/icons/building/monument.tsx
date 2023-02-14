import React, { type SVGProps } from 'react';

const monument = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m8 18 2-13 2-2 2 2 2 13M5 21v-3h14v3M3 21h18" />
  </svg>
);

export default monument;
