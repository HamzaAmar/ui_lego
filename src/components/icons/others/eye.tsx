import React, { type SVGProps } from 'react';

const circleAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M22 12c-3 5-6 7-10 7s-7-2-10-7c3-5 6-7 10-7s7 2 10 7Z" />
  </svg>
);

export default circleAlert;
