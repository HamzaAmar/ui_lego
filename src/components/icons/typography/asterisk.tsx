import React, { type SVGProps } from 'react';

const justify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="m12 12 8-4.5M12 12v9m0-9L4 7.5m8 4.5 8 4.5M12 12V3m0 9-8 4.5" />
  </svg>
);

export default justify;
