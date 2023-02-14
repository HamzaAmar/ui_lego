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
    <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1 0 1.7-.5 3-.5s1.5.5 3 .5 4-3 4-5c0 0-2.5-.4-2.5-3 0-2.2 2.4-3 2.5-3-1-1.5-3-2-3.5-2-1.4-.1-2.8 1-3.5 1-.7 0-1.9-1-3-1Zm3-3a2 2 0 0 0 2-2 2 2 0 0 0-2 2Z" />
  </svg>
);

export default SvgComponent;
