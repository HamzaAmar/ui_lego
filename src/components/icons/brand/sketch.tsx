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
    <path d="m3.3 10.9 8 8.8c.4.4 1 .4 1.5 0l8-8.8a1 1 0 0 0 0-1.3l-3.5-5.2a1 1 0 0 0-.8-.4h-9a1 1 0 0 0-.8.4L3.2 9.6a1 1 0 0 0 0 1.3h0Z" />
  </svg>
);

export default SvgComponent;
