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
    <path d="M15.5 8h-7l.5 4h6l-.5 3.5-2.5.8-2.5-.8-.1-.5M20 4l-2 14.5-6 2-6-2L4 4h16Z" />
  </svg>
);

export default SvgComponent;
