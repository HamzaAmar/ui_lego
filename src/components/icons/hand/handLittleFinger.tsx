import React, { type SVGProps } from 'react';

const handLittleFinger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M11 10.5a1.5 1.5 0 1 0-3 0V13l-1.5-1.5a1.9 1.9 0 0 0-2.3-.3 1.5 1.5 0 0 0-.5 2 194.7 194.7 0 0 0 3.5 6.1 6 6 0 0 0 5 2.7H12h2a6 6 0 0 0 6-6V6.5a1.5 1.5 0 1 0-3 0V12v-1.5a1.5 1.5 0 1 0-3 0m-3 0V12m0-1.5v1m0-1a1.5 1.5 0 1 1 3 0m0 0V12" />
  </svg>
);

export default handLittleFinger;
