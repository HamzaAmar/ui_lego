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
    <path d="M17.5 6.5a6 6 0 1 0-3 8m3 3a6 6 0 1 0-8-3m-3 3a6 6 0 1 0 3-8m-3-3a6 6 0 1 0 8 3" />
  </svg>
);

export default SvgComponent;
