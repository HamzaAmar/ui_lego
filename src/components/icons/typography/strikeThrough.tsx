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
    <path d="M5 12h14m-3-5.5c-.2-.4-.7-.8-1.5-1.1A7 7 0 0 0 12 5h-1a3.5 3.5 0 1 0 0 7h2a3.5 3.5 0 0 1 0 7h-1.5a7 7 0 0 1-2.5-.4c-.8-.3-1.3-.7-1.5-1.1" />
  </svg>
);

export default justify;
