import React, { type SVGProps } from 'react';

const AntennaBarOne = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M6 18v-3m4 3v0m4 0v0m4 0v0" />
  </svg>
);

export default AntennaBarOne;
