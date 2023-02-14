import React, { type SVGProps } from 'react';

const won = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M6 12h6M9 6v12m-3 0h6a6 6 0 1 0 0-12H6" />
  </svg>
);

export default won;
