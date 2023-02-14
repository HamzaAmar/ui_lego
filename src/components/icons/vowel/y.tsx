import React, { type SVGProps } from 'react';

const Y = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m7 4 5 9m0 0 5-9m-5 9v7" />
  </svg>
);

export default Y;
