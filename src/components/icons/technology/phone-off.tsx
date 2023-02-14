import React, { type SVGProps } from 'react';

const phoneCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M3 21 21 3M5.8 14.2A16 16 0 0 1 3 6a2 2 0 0 1 2-2h4l2 5-2.5 1.5.3.6m1.8 2.3a11 11 0 0 0 2.9 2.1L15 13l5 2v4a2 2 0 0 1-2 2 16 16 0 0 1-10.3-4.7" />
  </svg>
);

export default phoneCheck;
