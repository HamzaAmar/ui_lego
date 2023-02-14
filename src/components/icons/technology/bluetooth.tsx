import React, { type SVGProps } from 'react';

const Bluetooth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m7 8 10 8-5 4V4l5 4-10 8" />
  </svg>
);

export default Bluetooth;
