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
    <path d="M19 6.9a2 2 0 0 1 1 1.7v6.6a2 2 0 0 1-1 1.7l-6 3.8a2 2 0 0 1-2 0L5 17a2 2 0 0 1-1-1.7V8.6A2 2 0 0 1 5 7l6-3.6a2 2 0 0 1 2 0l6 3.6h0Z" />
  </svg>
);

export default heart;
