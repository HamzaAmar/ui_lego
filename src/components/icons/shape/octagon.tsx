import React, { type SVGProps } from 'react';

const octagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M8.7 3h6.6c.3 0 .5.1.7.3L20.7 8c.2.2.3.4.3.7v6.6c0 .3-.1.5-.3.7L16 20.7a1 1 0 0 1-.7.3H8.7a1 1 0 0 1-.7-.3L3.3 16a1 1 0 0 1-.3-.7V8.7c0-.3.1-.5.3-.7L8 3.3c.2-.2.4-.3.7-.3Z" />
  </svg>
);

export default octagon;
