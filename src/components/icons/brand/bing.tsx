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
    <path d="m5 3 4 2v12l6-3-2-1-1-4 7 3v4L9 21l-4-2V3Z" />
  </svg>
);

export default SvgComponent;
