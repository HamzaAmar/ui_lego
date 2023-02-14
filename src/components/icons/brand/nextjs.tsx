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
    <path d="M9 15V9l7.7 10.6a9 9 0 1 1 2.3-2M15 12V9" />
  </svg>
);

export default SvgComponent;
