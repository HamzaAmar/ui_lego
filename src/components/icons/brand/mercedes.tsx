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
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0v9m0 0 7 5m-7-5-7 5" />
  </svg>
);

export default SvgComponent;
