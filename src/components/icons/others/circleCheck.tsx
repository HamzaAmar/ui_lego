import React, { type SVGProps } from 'react';

const circleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m9 12 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default circleCheck;
