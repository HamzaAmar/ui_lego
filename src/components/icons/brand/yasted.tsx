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
    <path d="m7 3 5 2.9v5l4.2-2.7L21 11l-9.3 5.4L9.3 18 4 21v-5.6l3-1.7V3Z" />
  </svg>
);

export default SvgComponent;
