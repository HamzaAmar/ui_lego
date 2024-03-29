import React, { type SVGProps } from 'react';

const qrcode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M7 17v0M7 7v0m10 0v0m0 7h-3v3m6-3v0m-6 6h3m0-3h3v3M5 4h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V5c0-.6.4-1 1-1Zm10 0h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-4a1 1 0 0 1-1-1V5c0-.6.4-1 1-1ZM5 14h4c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-4c0-.6.4-1 1-1Z" />
  </svg>
);

export default qrcode;
