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
    <path d="M9 3.6c5 6 7 10.5 7.5 16.2M6.4 19c3.5-3.5 6-6.5 14.5-6.4M3.1 10.8c5 0 9.8-.4 15.3-5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default SvgComponent;
