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
    <path d="M11.8 21A9 9 0 0 1 6 19H2l1.7-3.3A8.8 8.8 0 0 1 3 12c0-5 3.9-9 9-9 5 0 9.1 4 9.1 9s-4.1 9-9.2 9Z" />
    <path d="M11.5 15H10V9h1.5c2.1 0 3.5.8 3.5 3v0c0 2.2-1.4 3-3.5 3Z" />
  </svg>
);

export default SvgComponent;
