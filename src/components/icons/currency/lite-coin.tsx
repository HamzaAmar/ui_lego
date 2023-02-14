import React, { type SVGProps } from 'react';

const liteCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M18 19H9.8a2 2 0 0 1-2-2.3L9.5 5M14 9l-9 4" />
  </svg>
);

export default liteCoin;
