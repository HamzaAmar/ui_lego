import React, { type SVGProps } from 'react';

const speaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M11 20a3 3 0 0 1-3-3V6l5 5m0-7a3 3 0 0 1 3 3v11l-5-5M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z" />
  </svg>
);

export default speaker;
