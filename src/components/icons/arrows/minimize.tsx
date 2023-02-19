import React, { type SVGProps } from 'react';

const minimize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5 9h4m0 0V5m0 4L3 3m2 12h4m0 0v4m0-4-6 6M19 9h-4m0 0V5m0 4 6-6m-2 12h-4m0 0v4m0-4 6 6" />
  </svg>
);

export default minimize;
