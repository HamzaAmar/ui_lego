import React, { type SVGProps } from 'react';

const floppy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M14 4v4H8V4M6 4h10l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
);

export default floppy;
