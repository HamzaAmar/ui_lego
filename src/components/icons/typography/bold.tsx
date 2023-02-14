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
    <path d="M13 12a3.5 3.5 0 1 0 0-7H7v7m6 0H7m6 0h1a3.5 3.5 0 1 1 0 7H7v-7" />
  </svg>
);

export default justify;
