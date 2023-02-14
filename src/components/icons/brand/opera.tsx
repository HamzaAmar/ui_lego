import React, { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <path d="M12 17c1.7 0 3-2.2 3-5s-1.3-5-3-5-3 2.2-3 5 1.3 5 3 5Z" />
  </svg>
);

export default SvgComponent;
