import React, { type SVGProps } from 'react';

const tv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M10 6h10a2 2 0 0 1 2 2v8c0 .6-.2 1-.6 1.4M6 10v0m4 0v0m4 0v0m4 0v0M6 14v0m12 0v0m-8 0h4M3 3l18 18m-3-3H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l12 12Z" />
  </svg>
);

export default tv;
