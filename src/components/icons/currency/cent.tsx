import React, { type SVGProps } from 'react';

const cent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M16 7.5A6 6 0 0 0 12 6m0 0a6 6 0 0 0 0 12m0-12V4m0 14a6 6 0 0 0 4-1.5M12 18v2" />
  </svg>
);

export default cent;
