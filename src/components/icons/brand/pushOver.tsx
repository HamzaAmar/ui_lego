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
    <path d="M6.2 11c-.9-2 1.5-8 8.2-8C17.7 3 19 4.4 19 6.9c0 2.6-2.6 6.1-9 6.1m2.5-7L7 21" />
  </svg>
);

export default SvgComponent;
