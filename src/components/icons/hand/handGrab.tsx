import React, { type SVGProps } from 'react';

const handOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M11 10V7.5a1.5 1.5 0 1 0-3 0V11L6.5 9.5a1.9 1.9 0 0 0-2.3-.3 1.5 1.5 0 0 0-.5 2L7 17l.2.3a6 6 0 0 0 5 2.7H12h2a6 6 0 0 0 6-6V9.5a1.5 1.5 0 1 0-3 0m-6 0v-3a1.5 1.5 0 1 1 3 0V10m0-2.5a1.5 1.5 0 1 1 3 0V10" />
  </svg>
);

export default handOff;
