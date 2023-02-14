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
    <path d="M12 8v4m0 4h0m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default circleAlert;
