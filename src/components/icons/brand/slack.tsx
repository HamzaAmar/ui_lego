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
    <path d="M12 12V6m0 6h4V6a2 2 0 1 0-4 0m0 6h6m-6 0v4h6a2 2 0 0 0 0-4m-6 0v6m0-6H8v6a2 2 0 0 0 4 0m0-6H6m6 0V8H6a2 2 0 0 0 0 4m6-6a2 2 0 1 0-2 2m6 2a2 2 0 1 1 2 2m-4 4a2 2 0 1 1-2 2m-4-4a2 2 0 1 1-2-2" />
  </svg>
);

export default SvgComponent;
