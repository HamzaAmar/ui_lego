import React, { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M8 14.5c.5 2 2.4 2.5 4 2.5 2.9 0 4-1.2 4-2.5 0-1.5-2-2.5-4-2.5s-4-1-4-2.5C8 8.2 9.1 7 12 7c1.6 0 3.5.5 4 2.5M12 3a9 9 0 0 1 8.6 11.6 4.5 4.5 0 0 1-6 6A9 9 0 0 1 3.5 9.3a4.5 4.5 0 0 1 6-5.9A9 9 0 0 1 12 3Z" />
  </svg>
);

export default SvgComponent;
