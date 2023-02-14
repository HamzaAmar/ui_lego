import React, { type SVGProps } from 'react';

const Behance = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8 12a3 3 0 0 0 0-6H3v12h5a3 3 0 0 0 0-6Zm0 0H3m11 1h7a3 3 0 1 0-7 0Zm0 0v2a4 4 0 0 0 7 1M16 6h3" />
  </svg>
);

export default Behance;
