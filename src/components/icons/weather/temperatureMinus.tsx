import React, { type SVGProps } from 'react';

const temperature = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M8 9h4m4 0h6M8 13.5a4 4 0 1 0 4 0V5a2 2 0 1 0-4 0v8.5Z" />
  </svg>
);

export default temperature;
