import React, { type SVGProps } from 'react';

const user = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
);

export default user;
