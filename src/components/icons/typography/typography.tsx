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
    <path d="M4 20h3m7 0h7M6.9 15h6.9m-3.6-8.7L16 20M5 20l6-16h2l7 16" />
  </svg>
);

export default justify;
