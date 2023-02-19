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
    <path d="m5.3 6 3.4 3.3L12 6l3.3 3.3L18.7 6 22 9.3l-3.3 3.2-3.4-3.3-3.3 3.3 3.3 3.3L12 19l-3.3-3.3 3.3-3.2-3.3-3.3-3.4 3.3L2 9.2 5.3 6Z" />
  </svg>
);

export default SvgComponent;
