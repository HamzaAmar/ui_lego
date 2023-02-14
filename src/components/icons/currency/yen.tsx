import React, { type SVGProps } from 'react';

const yen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M12 19v-7m0 0L7 5m5 7 5-7M8 17h8m-8-4h8" />
  </svg>
);

export default yen;
