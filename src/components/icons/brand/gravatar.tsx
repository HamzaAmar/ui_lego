import React, { type SVGProps } from 'react';

const gravatar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5.6 5.6A9 9 0 1 0 12 3v7.7" />
  </svg>
);

export default gravatar;
