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
    <path d="M16 4H9.5a3.5 3.5 0 1 0 0 7h.5m4 4V4m-4 11V4M5 19h14M5 19l2 2m-2-2 2-2" />
  </svg>
);

export default justify;
