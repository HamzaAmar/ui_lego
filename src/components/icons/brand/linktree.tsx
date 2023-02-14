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
    <path d="m12 8-4 7h2v5H5v-5H2L9 3l3 5Zm0 0 4 7h-2v5h5v-5h3L15 3l-3 5Z" />
  </svg>
);

export default SvgComponent;
