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
    <path d="M10 16V8h2.5a2.5 2.5 0 0 1 0 5H10m11-1a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default SvgComponent;
