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
    <path d="M12 3a9 9 0 0 1 3.6 17.2l-2.2-5.6a3 3 0 1 0-2.8 0l-2.2 5.6A9 9 0 0 1 12 3Z" />
  </svg>
);

export default SvgComponent;
