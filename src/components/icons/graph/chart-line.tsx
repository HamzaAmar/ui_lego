import React, { type SVGProps } from 'react';

const chartLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M4 19h16M4 15l4-6 4 2 4-5 4 4" />
  </svg>
);

export default chartLine;
