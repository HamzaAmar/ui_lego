import React, { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m3 9 9 6 9-6M3 9l9-6 9 6M3 9v10M21 9v10m0 0a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m18 0-6-6M3 19l6-6" />
  </svg>
);

export default SvgComponent;
