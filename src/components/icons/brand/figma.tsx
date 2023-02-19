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
    <path d="M15 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 0a3 3 0 1 0 0-6H9a3 3 0 0 0 0 6m6 0H9m0 0a3 3 0 1 0 0 6m0 0h3m-3 0a3 3 0 1 0 3 3V3" />
  </svg>
);

export default SvgComponent;
