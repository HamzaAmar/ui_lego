import React, { type SVGProps } from 'react';

const tv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m16 3-4 4-4-4m7 4v13m3-5v0m0-3v0M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2Z" />
  </svg>
);

export default tv;
