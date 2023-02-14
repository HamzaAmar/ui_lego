import React, { type SVGProps } from 'react';

const speaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M12 7v0M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Zm8 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export default speaker;
