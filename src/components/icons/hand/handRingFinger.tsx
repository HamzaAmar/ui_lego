import React, { type SVGProps } from 'react';

const handFinger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M11 12v-1.5a1.5 1.5 0 1 0-3 0V13l-1.5-1.5a1.9 1.9 0 0 0-2.3-.3 1.5 1.5 0 0 0-.5 2 194.7 194.7 0 0 0 3.5 6.1 6 6 0 0 0 5 2.7H12h2a6 6 0 0 0 6-6v-4.5a1.5 1.5 0 1 0-3 0m-6 0v-2a1.5 1.5 0 1 1 3 0V12 5.5a1.5 1.5 0 1 1 3 0V12" />
  </svg>
);

export default handFinger;
