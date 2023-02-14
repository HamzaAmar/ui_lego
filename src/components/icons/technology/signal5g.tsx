import React, { type SVGProps } from 'react';

const signal5g = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M10 8H5v4h3a2 2 0 1 1 0 4H5m14-8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v-4h-1" />
  </svg>
);

export default signal5g;
