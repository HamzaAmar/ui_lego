import React, { type SVGProps } from 'react';

const circlePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M9 12h6m-3-3v6m9-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default circlePlus;
