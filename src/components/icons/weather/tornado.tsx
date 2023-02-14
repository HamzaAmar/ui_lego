import React, { type SVGProps } from 'react';

const temperature = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M21 4H3m10 12H7m4 4h4M6 8h14M4 12h12" />
  </svg>
);

export default temperature;
