import React, { type SVGProps } from 'react';

const AccessPoint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M12 12v0m2.8-2.8a4 4 0 0 1 0 5.6m2.9-8.5a8 8 0 0 1 0 11.4m-8.5-2.9a4 4 0 0 1 0-5.6m-2.9 8.5a8 8 0 0 1 0-11.4" />
  </svg>
);

export default AccessPoint;
