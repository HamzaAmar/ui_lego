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
    <path d="m8 16 1.1-2m1.4-2.5L13 7m-6 7h5m2.9 0H17m-1 2-2.5-4.5M12 8.8 11 7m10 5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default SvgComponent;
