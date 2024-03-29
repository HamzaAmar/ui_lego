import React, { type SVGProps } from 'react';

const hipChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M7.5 13.5a6.3 6.3 0 0 0 9 0m1.3 3.8.2-.2c1.8-1.4 3-3.4 3-5.7 0-4.3-4-7.8-9-7.8S3 7 3 11.4c0 4.2 4 7.6 9 7.6h2c1.3.7 3.2 1.4 4.8 1.4.5 0 .7-.4.4-.8a9 9 0 0 1-1.4-2.3Z" />
  </svg>
);

export default hipChat;
