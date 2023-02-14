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
    <path d="M3 3h3v18H3V3Zm12 13a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
  </svg>
);

export default SvgComponent;
