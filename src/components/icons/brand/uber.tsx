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
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm0 0h6m1-3h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1v-4c0-.6.4-1 1-1Z" />
  </svg>
);

export default SvgComponent;
