import React, { type SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M10 12V6L8 4 6 6v6m12 0V6l-2-2-2 2v6M4 12v4h16v-4H4Zm2 4v4h4v-4H6Zm8 0v4h4v-4h-4Z" />
  </svg>
);

export default SvgComponent;
