import React, { type SVGProps } from 'react';

const mobileVibration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M8 4h2M9 17v0M21 6l-2 3 2 3-2 3 2 3M5 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />
  </svg>
);

export default mobileVibration;
