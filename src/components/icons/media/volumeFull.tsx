import React, { type SVGProps } from 'react';

const VolumeFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M15 8a5 5 0 0 1 0 8m3-11a9 9 0 0 1 0 14M6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4-5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1l-4-5Z" />
  </svg>
);

export default VolumeFull;
