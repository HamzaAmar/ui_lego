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
    <path d="M17 9.4v5.1l4 3.5V6l-4 3.4ZM3.9 6h10C15.5 6 17 7.2 17 8.8V17a1 1 0 0 1-1 1H5.7C4 18 3 16.5 3 15V7a.9.9 0 0 1 .5-1H4Z" />
  </svg>
);

export default SvgComponent;
