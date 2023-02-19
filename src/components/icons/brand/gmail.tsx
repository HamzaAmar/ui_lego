import React, { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M16 4h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3V4Zm0 0-4 4-4-4m0 0v16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3ZM4 6.5l8 7.5 8-7.5" />
  </svg>
);

export default SvgComponent;
