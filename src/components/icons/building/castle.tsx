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
    <path d="M3 11h18m-6 8v-2a3 3 0 0 0-6 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5h4v3h3V5h4v3h3V5h4v14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" />
  </svg>
);

export default SvgComponent;
