import React, { type SVGProps } from 'react';

const dollar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M16.7 8A3 3 0 0 0 14 6h-4a3 3 0 1 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1-2.7-2M12 3v3m0 12v3" />
  </svg>
);

export default dollar;
