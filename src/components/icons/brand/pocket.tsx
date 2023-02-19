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
    <path d="m8 11 4 4 4-4M5 4h14a2 2 0 0 1 2 2v6a9 9 0 0 1-18 0V6a2 2 0 0 1 2-2Z" />
  </svg>
);

export default SvgComponent;
