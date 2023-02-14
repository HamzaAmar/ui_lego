import React, { type SVGProps } from 'react';

const chartArrows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M3 18h14m0 0-3-3m3 3-3 3M9 9l3 3m0 0-3 3m3-3H3m0-9v18M18 3l3 3m0 0-3 3m3-3H3" />
  </svg>
);

export default chartArrows;
