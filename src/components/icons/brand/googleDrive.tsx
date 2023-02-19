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
    <path d="m6 20 6-10-3-5M6 20l-3-5L9 5M6 20h12l3-5M9 5l6 10h6M9 5h6l6 10M9 15h12" />
  </svg>
);

export default SvgComponent;
