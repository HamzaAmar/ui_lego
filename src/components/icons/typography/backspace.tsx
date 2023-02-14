import React, { type SVGProps } from 'react';

const justify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m12 10 4 4m0-4-4 4m8-8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5-5a1.5 1.5 0 0 1 0-2l5-5h11Z" />
  </svg>
);

export default justify;
