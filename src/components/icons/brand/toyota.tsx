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
    <path d="M12 19c5.5 0 10-3.1 10-7s-4.5-7-10-7m0 14c-5.5 0-10-3.1-10-7s4.5-7 10-7m0 14c-1.7 0-3-3.1-3-7s1.3-7 3-7m0 14c1.7 0 3-3.1 3-7s-1.3-7-3-7M6.4 6.2C5.5 6.7 5 7.3 5 8c0 1.7 3.1 3 7 3s7-1.3 7-3c0-.7-.5-1.3-1.4-1.8" />
  </svg>
);

export default SvgComponent;
