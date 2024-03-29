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
    <path d="m3 15 9 6m-9-6 9-6m-9 6V9m9 12 9-6m-9 6v-6m9 0-9-6m9 6V9m-9 0V3M3 9l9 6M3 9l9-6m0 12 9-6m0 0-9-6" />
  </svg>
);

export default SvgComponent;
