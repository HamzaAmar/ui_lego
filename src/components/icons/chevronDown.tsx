import type { SVGProps } from 'react';

const chevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default chevronDown;
