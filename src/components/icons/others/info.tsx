import React, { type SVGProps } from 'react';

const info = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M12 8h0m-1 4h1v4h1m8-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default info;
