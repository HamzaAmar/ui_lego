import React, { type SVGProps } from 'react';

const power = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M7 6a7.8 7.8 0 1 0 10 0m-5-2v8" />
  </svg>
);

export default power;
