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
    <path d="M20 20c0-4-1-16-4-16-3.1 0-4 9-4 14.8C12 13 11.1 4 8 4 5 4 4 16 4 20" />
  </svg>
);

export default SvgComponent;
