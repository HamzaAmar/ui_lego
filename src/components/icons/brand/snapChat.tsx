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
    <path d="M3 16c4-2.2 4-4.2 1-7.2M21 16c-4-2.2-4-4.2-1-7.2m-3.1-1a4.9 4.9 0 0 0-9.8 0c0 4.3-.2 6.5-4.1 8.2 2 .8 2 .8 3 3 3 0 4 2 6 2s3-2 6-2c1-2.2 1-2.2 3-3-4-1.7-4.1-3.9-4.1-8.2Z" />
  </svg>
);

export default SvgComponent;
