import React, { type SVGProps } from 'react';

const infographic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M11 7a4 4 0 1 1-4-4m4 4a4 4 0 0 0-4-4m4 4H7V3m2 14v4m8-7v7m-4-8v8m8-9v9" />
  </svg>
);

export default infographic;
