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
    <path d="M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);

export default SvgComponent;
