import React, { type SVGProps } from 'react';

const cloudOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m3 3 18 18M9.7 5.6l1-.4a6 6 0 0 1 5.5 1c1.5 1.2 2.2 3 1.8 4.8h1a3.5 3.5 0 0 1 2.2 6.2M18 18H7c-2.6 0-4.7-2-4.7-4.5S4.4 9 7 9c.1-.5.3-1 .6-1.4L18 18Z" />
  </svg>
);

export default cloudOff;
