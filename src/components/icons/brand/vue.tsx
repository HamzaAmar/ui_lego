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
    <path d="M18.5 5 12 15 5.5 5M15 5l-3 4.5L9 5H2l10 16L22 5h-7Z" />
  </svg>
);

export default SvgComponent;
