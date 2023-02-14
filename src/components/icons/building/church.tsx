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
    <path d="M3 21h18m-11 0v-4a2 2 0 0 1 4 0v4M10 5h4m-2-2v5m0 0-8 8h16l-8-8ZM6 21v-7m12 0v7" />
  </svg>
);

export default SvgComponent;
