import React, { type SVGProps } from 'react';

const DeviceAnalytics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M7 20h10m-8-4v4m6-4v4m-7-8 3-3 2 2 3-3M4 4h16c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V5c0-.6.4-1 1-1Z" />
  </svg>
);

export default DeviceAnalytics;
