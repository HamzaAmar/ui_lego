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
    <path d="M4 7h6m-6 4h6m-6 4h16M4 19h16M15 5h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z" />
  </svg>
);

export default justify;
