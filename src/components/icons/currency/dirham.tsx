import React, { type SVGProps } from 'react';

const cent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M8.5 19H5m3.6-2.5A1.5 1.5 0 1 0 7.5 19M7 4v9m8 0h1.9a1.5 1.5 0 0 0 1.3-2.3L16 7m-5 6v0" />
  </svg>
);

export default cent;
