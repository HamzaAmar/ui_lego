import React, { type SVGProps } from 'react';

const manyToMany = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M7 10h1v4m6 0v-4l3 4v-4m-6 .5v0m0 3v0M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2Z" />
  </svg>
);

export default manyToMany;
