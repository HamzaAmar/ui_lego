import React, { type SVGProps } from 'react';

const justify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M10 14a3.5 3.5 0 0 0 5 0l4-4a3.5 3.5 0 0 0-5-5l-.5.5M14 10a3.5 3.5 0 0 0-5 0l-4 4a3.5 3.5 0 1 0 5 5l.5-.5M16 21v-2m3-3h2M3 8h2m3-5v2" />
  </svg>
);

export default justify;
