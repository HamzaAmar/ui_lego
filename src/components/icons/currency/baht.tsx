import React, { type SVGProps } from 'react';

const arc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M11 4v2m0 12v2M8 6h5a3 3 0 0 1 3 3v.1a2.9 2.9 0 0 1-2.9 2.9H8h5a3 3 0 0 1 3 3v.1a2.9 2.9 0 0 1-2.9 2.9H8V6Z" />
  </svg>
);

export default arc;
