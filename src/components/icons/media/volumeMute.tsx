import React, { type SVGProps } from 'react';

const VolumeMute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m16 10 4 4m0-4-4 4M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4-5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1l-4-5Z" />
  </svg>
);

export default VolumeMute;
