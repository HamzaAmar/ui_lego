import React, { type SVGProps } from 'react';

const circle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM6.5 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17.5 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  </svg>
);

export default circle;
