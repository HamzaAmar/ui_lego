import React, { type SVGProps } from 'react';

const lighthouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M8 9h8M3 11l2-2-2-2m18 4-2-2 2-2m-9-4 2 3 2 15H8l2-15 2-3Z" />
  </svg>
);

export default lighthouse;
