import React, { type SVGProps } from 'react';

const mobileMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M15 16v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2m2 13v0m1-15h10v8h-3l-4 2v-2h-3V3Z" />
  </svg>
);

export default mobileMessage;
