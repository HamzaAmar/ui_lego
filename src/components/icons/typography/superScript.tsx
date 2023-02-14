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
    <path d="m5 7 8 10m-8 0 8-10m8 4h-4l3.5-4A2 2 0 0 0 17 5" />
  </svg>
);

export default justify;
