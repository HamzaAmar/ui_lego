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
    <path d="M19 8.2c2.5 5 .4 11.6-5.5 12.6-7.7 1.7-12.8-7.7-7-13.2L8 6.2c0 .5.3 3.5 1 3.2 3 0 4-4.2 3.6-7.4 2.7 1.4 5 3.4 6.3 6.2Z" />
  </svg>
);

export default SvgComponent;
