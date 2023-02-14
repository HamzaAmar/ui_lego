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
    <path d="M20 6c0 1.7-3.6 3-8 3S4 7.7 4 6m16 0c0-1.7-3.6-3-8-3S4 4.3 4 6m16 0v6M4 6v6m0 0c0 .8.8 1.6 2.3 2.1 1.5.6 3.6.9 5.7.9s4.2-.3 5.7-.9c1.5-.5 2.3-1.3 2.3-2.1M4 12v6c0 .8.8 1.6 2.3 2.1 1.5.6 3.6.9 5.7.9s4.2-.3 5.7-.9c1.5-.5 2.3-1.3 2.3-2.1v-6" />
  </svg>
);

export default database;
