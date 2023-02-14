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
    <path d="M4 20h16l-8-8m-8 8V4h16L4 20Zm0-8 8-8" />
  </svg>
);

export default SvgComponent;
