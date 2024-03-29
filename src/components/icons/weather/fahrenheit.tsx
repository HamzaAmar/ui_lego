import React, { type SVGProps } from 'react';

const fahrenheit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M13 12h5m2-6h-6a1 1 0 0 0-1 1v11M8 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
);

export default fahrenheit;
