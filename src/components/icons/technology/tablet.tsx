import React, { type SVGProps } from 'react';

const tablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M18 3H6a1 1 0 0 0-1 1v16c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1Z" />
    <path d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
);

export default tablet;
