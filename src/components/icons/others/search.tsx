import React, { type SVGProps } from 'react';

const circleAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </svg>
);

export default circleAlert;
