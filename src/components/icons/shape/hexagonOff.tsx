import React, { type SVGProps } from 'react';

const heart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M8.7 4.7 11 3.3a2 2 0 0 1 2 0l6 3.6h0a2 2 0 0 1 1 1.7v6.6l-.1.7m-2.2 1.8-4.7 3a2 2 0 0 1-2 0L5 17a2 2 0 0 1-1-1.7V8.6A2 2 0 0 1 5 7l1.2-.7M3 3l18 18" />
  </svg>
);

export default heart;
