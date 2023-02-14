import React, { type SVGProps } from 'react';

const laptop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M3 19h18M6 6h12c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V7c0-.6.4-1 1-1Z" />
  </svg>
);

export default laptop;
