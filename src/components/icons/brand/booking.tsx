import React, { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8 12h4a2 2 0 0 1 0 4H8V9a1 1 0 0 1 1-1h2a2 2 0 0 1 0 4H9m7 4h0M4 18V9a5 5 0 0 1 5-5h7a5 5 0 0 1 4 5v7a5 5 0 0 1-4 4H6a2 2 0 0 1-2-2Z" />
  </svg>
);

export default SvgComponent;
