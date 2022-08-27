import type { SVGProps } from 'react';

const x = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default x;
