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
    <path d="m4 6 3.2 11.4a.9.9 0 0 0 1.7 0L12 8l3.1 9.4a.8.8 0 0 0 1.7 0L20 6m1 4H3m18 4H3" />
  </svg>
);

export default won;
