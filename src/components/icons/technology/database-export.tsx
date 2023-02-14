import React, { type SVGProps } from 'react';

const database = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M20 6c0 1.7-3.6 3-8 3S4 7.7 4 6m16 0c0-1.7-3.6-3-8-3S4 4.3 4 6m16 0v8M4 6v6m0 0c0 1.7 3.6 3 8 3 1.1 0 2.2 0 3.3-.3M4 12v6c0 1.6 3.3 3 7.5 3m2.5-2h7m0 0-3-3m3 3-3 3" />
  </svg>
);

export default database;
