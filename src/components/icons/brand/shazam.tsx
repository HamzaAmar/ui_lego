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
    <path d="m10 12 2-2a2.8 2.8 0 1 1 4 4l-3 3m1-5-2 2a2.8 2.8 0 0 1-4-4l3-3m10 5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default SvgComponent;
