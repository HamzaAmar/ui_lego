import React, { type SVGProps } from 'react';

const tablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M18 12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3m12 0H6m12 0a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3m1-4v0m0 8v0" />{' '}
  </svg>
);

export default tablet;
