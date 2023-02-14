import React, { type SVGProps } from 'react';

const arch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M3 21h18M4 21V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15M9 21v-8a3 3 0 0 1 6 0v8" />
  </svg>
);

export default arch;
