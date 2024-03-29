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
    <path d="M3 18c0 .4.1.8.3 1A2 2 0 0 0 5 20h3a5 5 0 0 0-3.7-4.8l2-3.5A9 9 0 0 1 12 20h4m0 0h3a2 2 0 0 0 1.8-2.8L13.8 5a2 2 0 0 0-3.6 0L8.4 8.2A13 13 0 0 1 16 20Z" />
  </svg>
);

export default SvgComponent;
