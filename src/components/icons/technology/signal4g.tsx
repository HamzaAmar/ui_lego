import React, { type SVGProps } from 'react';

const signal4g = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 8v5h5M9 8v8m10-8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v-4h-1"
    />
  </svg>
);

export default signal4g;
