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
    <path d="m2 6 6 2.4-.7 6a3 3 0 0 0 3 3.6 4.3 4.3 0 0 0 4.2-3.6 3 3 0 0 0 3 3.6 4.3 4.3 0 0 0 4.2-3.6l.3-4.6m-7.5 4.6.3-3" />
  </svg>
);

export default SvgComponent;
