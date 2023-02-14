import React, { type SVGProps } from 'react';

const triangleAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M12 9v2m0 4v0m-7 4h14a2 2 0 0 0 1.8-2.8L13.8 4a2 2 0 0 0-3.6 0l-7 12.3A2 2 0 0 0 4.8 19" />
  </svg>
);

export default triangleAlert;
