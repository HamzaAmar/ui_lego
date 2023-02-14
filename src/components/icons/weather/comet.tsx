import React, { type SVGProps } from 'react';

const cloudSnow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m4 4 7 7M9 4l3.5 3.5M4 9l3.5 3.5m8 6-3 1.5.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2 .5 3.5-3-1.5Z" />
  </svg>
);

export default cloudSnow;
