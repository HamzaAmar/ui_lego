import React, { type SVGProps } from 'react';

const wifiOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M12 18h0m-2.8-2.8a4 4 0 0 1 5.6 0m-.4-4.8a8 8 0 0 1 3.3 2M10.2 6a12 12 0 0 1 10.3 3.4M3 3l18 18M6.3 12.3a8 8 0 0 1 4-2.1l-4 2.1ZM3.5 9.5c1-1 2.2-1.8 3.6-2.4L3.5 9.5Z" />
  </svg>
);

export default wifiOff;
