import React, { type SVGProps } from 'react';

const send = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M20 11v3a3 3 0 0 1-3 3H8l-4 4V8a3 3 0 0 1 3-3h7m3-1h4m0 0v4m0-4-5 5" />
  </svg>
);

export default send;
