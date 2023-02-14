import React, { type SVGProps } from 'react';

const circle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </svg>
);

export default circle;
