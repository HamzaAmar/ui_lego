import React, { type SVGProps } from 'react';

const wareHouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M3 21V8l9-4 9 4v13m-8-8h4v8H7v-6h6m0 6v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
  </svg>
);

export default wareHouse;
