import React, { type SVGProps } from 'react';

const AntennaBarFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M6 18v-3m4 3v-6m4 6V9m4 9V6" />
  </svg>
);

export default AntennaBarFull;
