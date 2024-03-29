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
    <path d="M18 3v4l-3.9 6H18v4h-6.4L9 21H6v-4l3.9-6H6V7h6.4L15 3h3Z" />
  </svg>
);

export default SvgComponent;
